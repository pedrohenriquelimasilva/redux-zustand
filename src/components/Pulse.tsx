export function Pulse(){
  return(
    <aside className='animate-pulse w-80 border-l absolute top-0 bottom-0 right-0 border-zinc-800 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 bg-zinc-900 divide-y-2 divide-zinc-900'>
      <div className='flex w-full items-center gap-3 bg-zinc-800 p-4'>
        <div className='flex items-center'>
          <span className='w-10 h-10 rounded-full bg-zinc-900'></span>
        </div>
        <div className='flex flex-col gap-1 text-left w-full'>
          <span className='h-2 bg-zinc-900 rounded'></span>
          <span className='h-2 bg-zinc-900 rounded'></span>
        </div>
      </div>
      <div className='flex gap-3 flex-col p-4'>
                <div className='flex w-full items-center justify-between gap-3'>
                  <div className='flex gap-2 w-full items-center'>
                    <span className='w-3 h-3 rounded-full bg-zinc-800'></span>
                    <span className='flex-1 h-2 rounded-full bg-zinc-800'></span>
                  </div>
                  <span className='w-8 h-2 rounded-full bg-zinc-800'></span>
                </div>
                <div className='flex w-full items-center justify-between gap-3'>
                  <div className='flex gap-2 w-full items-center'>
                    <span className='w-3 h-3 rounded-full bg-zinc-800'></span>
                    <span className='flex-1 h-2 rounded-full bg-zinc-800'></span>
                  </div>
                  <span className='w-8 h-2 rounded-full bg-zinc-800'></span>
                </div>
      </div>       
    </aside>
  )
}