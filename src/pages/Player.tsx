import { BookMarked } from "lucide-react";
import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Module } from "../components/Module";
import { useEffect } from "react";
import { Pulse } from "../components/Pulse";
import { useStore, useCurrentLesson } from "../zustand-store"

export function Player(){
  const { course, load, isLoading } = useStore(store => {
    return {
      course: store.course,
      load: store.load,
      isLoading: store.isLoading
    }
  })

  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    if(currentLesson){
      document.title = `Assistindo: ${currentLesson?.title}`
    }
  }, [currentLesson])

  return (
    <div className='h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center'>
      <div className='flex w-[1100px] flex-col gap-6'>
        <div className="flex items-center justify-between">
          <Header />

          <button className='flex items-center rounded gap-2 bg-violet-500 px-3 py-2 font-medium text-white text-sm transition-colors hover:bg-violet-600'>
            <BookMarked className='w-4 h-4' />
            Adicionar módulo
          </button>
        </div>
        <main className='relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80'>
          <div className="flex-1">
            <Video />
          </div>
          {isLoading ? (
            <Pulse />
          ) : (
          <aside className="w-80 border-l absolute top-0 bottom-0 right-0 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 divide-y-2 divide-zinc-900">
            {course?.modules && course?.modules.map((module, index) => {     
              return <Module key={module.id} moduleIndex={index} title={module.title} amountOfLessons={module.lessons.length} />
            })}
          </aside>
          )}
          
        </main>
      </div>
    </div>
  )
}