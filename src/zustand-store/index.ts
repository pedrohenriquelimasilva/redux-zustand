import { create } from "zustand"
import { api } from "../lib/axios"

interface Course {
  id: number
  modules: Array<{
    id: number
    title: string
    lessons: Array<{
      id: string
      title: string
      duration: string
    }>
  }>
}

export interface PlayerState {
  currentModuleIndex: number
  currentLessonIndex: number
  course: Course | null
  isLoading: boolean

  play: (moduleAndLessonIndex: [number, number]) => void
  next: () => void

  load: () => Promise<void>
}

export const useStore = create<PlayerState>((set, get) => {
  return {
    course: null,
    currentModuleIndex: 0,
    currentLessonIndex: 0,
    isLoading: true,

    play: ([moduleIndex, lessonIndex]: [number, number]) => {
      set({
        currentModuleIndex: moduleIndex,
        currentLessonIndex: lessonIndex
      })
    },

    next: () => {
      const { currentLessonIndex, course, currentModuleIndex } = get()

      const nextLessonIndex = currentLessonIndex + 1
      const nextLesson = course?.modules[currentModuleIndex].lessons[nextLessonIndex]
      
      if(nextLesson){
        set({currentLessonIndex: nextLessonIndex})
      } else {

        const nextModuleIndex = currentModuleIndex + 1
        const nextModule = course?.modules[nextModuleIndex]

        if(nextModule){
          set({
            currentLessonIndex: 0,
            currentModuleIndex: nextModuleIndex
          })
        }
      }
    },
    load: async () => {
      set({isLoading: true})

      const response = await api.get('/course/1')

      set({
        course: response.data,
        isLoading: false
      })
    }
  }
})

export const useCurrentLesson = () => {
  return useStore(state => {
    const { currentModuleIndex, currentLessonIndex } = state

    const currentModule = state.course?.modules[currentModuleIndex]
    const currentLesson = currentModule?.lessons[currentLessonIndex]
    
    return {currentLesson, currentModule}
  })
}