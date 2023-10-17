import { ReactNode } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import { BookMarked, X } from "lucide-react";

interface DialogCourseProps{
  children: ReactNode
}

export function DialogCourse({children}: DialogCourseProps){
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
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-500 p-4">
          <Dialog.Close>
            <X className='w-4 h-4 absolute top-4 right-4 cursor-pointer text-zinc-400 hover:text-red-500 transition-colors'/>
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
          </fieldset>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}