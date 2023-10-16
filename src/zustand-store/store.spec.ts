import { describe, it, expect, beforeEach } from 'vitest'
import { useStore as store } from '.'

const course = {
  id: 1,
  modules: [
    {
      id: 1,
      title: 'Iniciando com React',
      lessons: [
        { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
        { id: 'D83-55LUdKE', title: 'Componente: Header', duration: '06:33' },
      ],
    },
    {
      id: 2,
      title: 'Estrutura da aplicação',
      lessons: [
        { id: "gE48FQXRZ_o", title: 'Componente: Comment', duration: '13:45' },
        { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' },
      ],
    },
  ],
}

const initialStates = store.getState()

describe('zustand store', () => {
  beforeEach(() => {
    store.setState(initialStates)
  })

  it('should be able to play', () => {
    const { play } = store.getState()

    play([1, 2])

    const { currentModuleIndex, currentLessonIndex } = store.getState()

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(2)
  })

  it('should be able to play next video automatically', () => {
    store.setState({ course })

    const { next } = store.getState()

    next()

    const { currentModuleIndex, currentLessonIndex } = store.getState()

    expect(currentModuleIndex).toEqual(0)
    expect(currentLessonIndex).toEqual(1)
  })

  it('should be able to jump to the next module automatically', () => {
    store.setState({ course })

    const { next } = store.getState()

    store.setState({ currentLessonIndex: 1 })

    next()

    const { currentModuleIndex, currentLessonIndex } = store.getState()

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(0)
  })

  it('should not update the current module and lesson if there is no next lesson avaliable', () => {
    store.setState({ course })

    const { next } = store.getState()

    store.setState({ currentLessonIndex: 1, currentModuleIndex: 1})

    next()

    const { currentModuleIndex, currentLessonIndex } = store.getState()

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(1)
  })
})