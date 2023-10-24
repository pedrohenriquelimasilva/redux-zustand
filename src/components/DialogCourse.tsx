import { ReactNode, useState } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import { BookMarked, CheckCircle, Trash2, X } from "lucide-react";

interface DialogCourseProps{
  children: ReactNode
}

export function DialogCourse({children}: DialogCourseProps){
  const [ addVideo, setAddVideo ] = useState(1)

  const numberOfClass = Array.from({
    length: addVideo
  })

  function handleRemoveClass (id: number){
    const totalClass = numberOfClass.filter((_, index) => index != id)

    setAddVideo(totalClass.length)
  }

  function handleAddClass (){
    setAddVideo(stage => stage + 1)
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className='flex items-center rounded gap-2 bg-violet-500 px-3 py-2 font-medium text-white text-sm transition-colors hover:bg-violet-600'> 
          <BookMarked className='w-4 h-4' />
          {children}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed bg-black opacity-30 inset-0' />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-400 p-4 rounded-md shadow-lg">
          <Dialog.Close>
            <X className='w-4 h-4 absolute top-4 right-4 cursor-pointer text-zinc-900 hover:text-red-500 transition-colors'/>
          </Dialog.Close>

          <Dialog.Title>
            Adicione um vídeo do Youtube a Playlist
          </Dialog.Title>

          <Dialog.Description>
            Crie aqui um módulo novo com todos os vídeos que você quer para estudar.
          </Dialog.Description>

          <fieldset>
            <label htmlFor="">
              <input type="text" placeholder='Nome do módulo' />
            </label>

            <div className='max-h-[400px] overflow-hidden overflow-y-scroll scrollbar scrollbar-thin flex flex-col gap-6'>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-zinc-200">Adicione vídeo por parâmetros de rota</h2>
                <button className=' font-bold bg-transparent hover:bg-emerald-500 transition-colors cursor-pointer border border-gray-50 rounded-md flex items-center justify-center gap-2 text-white text-base py-2 px-3 ' onClick={handleAddClass}>Adicionar vídeo</button>
              </div>

              <div className="flex gap-4 flex-col">
                {numberOfClass.map((_, index) => {
                  return (
                    <div key={index} className="flex items-center justify-between border-b-2 py-3 last:border-none gap-4">
                      <label className="flex items-center w-full gap-4 font-bold text-zinc-100">
                        Parâmetros
                        <input className="flex-1 rounded py-2 px-4 bg-slate-900 text-base font-normal text-zinc-100 placeholder:font-normal placeholder:text-base placeholder:text-zinc-400" placeholder='Ex: /watch?v=uR3aQOgzyDU'/>
                      </label>

                      <button className="flex items-center justify-center" onClick={() => handleRemoveClass(index)}>
                        <Trash2 className='w-5 h-5 text-white hover:text-red-600 cursor-pointer' />
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>

            <button type='submit' className='bg-emerald-400 hover:bg-emerald-500 transition-colors cursor-pointer border border-white rounded-md flex items-center justify-center gap-2 text-white text-base py-2 px-3 w-full font-bold mt-6'>
              Adicionar
              <CheckCircle className='w-4 h-4 text-white' />
            </button>
          </fieldset>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}