import Image from "next/image";
import { FiTrash, FiCheckCircle } from 'react-icons/fi'
import {CheckCircle,ClipboardText,Circle} from '@phosphor-icons/react/dist/ssr'

export default function Home() {
  return (
   <div className="h-screen flex flex-col">
    <header className="flex-1 bg-black/80 w-full">
      <h1 className='font-semibold text-3xl text-zinc-500 text-center m-10 p-6'>My Tasks</h1>
      <div className="flex justify-center gap-6">
        <input type="text" className="bg-gray-800 p-2 w-3/12" placeholder="Adicione uma tarefa"/>
        <button className='bg-blue-800 rounded p-2'>Criar</button>
      </div>
    </header>
   
    <main className="p-4 bg-black/60 h-4/6">
      <div className="flex flex-col items-center m-auto p-6 w-2/4">
        <div className="flex justify-between w-full">
          <p className="text-blue-500 font-semibold ml-8">Tarefas criadas</p>
          <p className="text-blue-500 font-semibold mr-8">Concluídas</p>
        </div>
        
        <div className="flex flex-col p-8 hidden">
          <ClipboardText size={32} className="text-zinc-500 mx-auto"/>
          <p className="text-zinc-500 text-xs font-semibold">Você ainda não tem tarefas cadastradas</p>
          <p className="text-zinc-500 text-xs">Crie tarefas e organize seus itens a fazer</p>
        </div>     

        <ul className="flex flex-col p-8">
            <li className="flex-col items-center text-xs bg-zinc-800 rounded p-4 mb-3">
              <div className="flex flex-nowrap justify-between">
                <Circle size={20} className="text-blue-400 mr-2"/>
                <span className="flex-1 break-all">Labore ea sit et amet ad ad nulla proident. Laboris elit do nostrud incididunt 
                elit ad ipsum esse esse minim do. Culpa sit occaecat eiusmod laborum irure proident sunt anim enim fugiat. 
                Cillum sunt quis quis excepteur et consectetur reprehenderit labore 
                exercitation duis quis et tempor.</span>
                <FiTrash size={20} className="text-gray-500 ml-2"/> 
              </div>
            </li>
            <li className="flex-col items-center text-xs bg-zinc-800 rounded p-4 mb-3">
              <div className="flex flex-nowrap justify-between">
              <Circle size={20} className="text-blue-400 mr-2"/>
              <span className="flex-1 break-all">
              Labore ea sit et amet ad ad nulla proident. Laboris elit do nostrud incididunt elit 
              ad ipsum esse esse minim do. Culpa sit occaecat eiusmod laborum irure proident sunt 
              anim enim fugiat. Cillum sunt quis quis excepteur et consectetur reprehenderit labore 
              exercitation duis quis et tempor.
              </span>
              <FiTrash size={20} className="text-gray-500 ml-2"/> 
              </div>
            </li>
            <li className="flex-col items-center text-xs bg-zinc-800 rounded p-4 mb-3">
              <div className="flex flex-nowrap justify-between">
              <Circle size={20} className="text-blue-400 mr-2"/>
              <span className="flex-1 break-all">
              Labore ea sit et amet ad ad nulla proident. Laboris elit do nostrud incididunt elit 
              ad ipsum esse esse minim do. Culpa sit occaecat eiusmod laborum irure proident sunt 
              anim enim fugiat. Cillum sunt quis quis excepteur et consectetur reprehenderit labore 
              exercitation duis quis et tempor.
              </span>
              <FiTrash size={20} className="text-gray-500 ml-2"/>
              </div>
            </li>
            <li className="flex-col items-center text-xs bg-zinc-800 rounded text-zinc-500 p-4 mb-3 w-full">
              <div className="flex flex-nowrap justify-between">
              <CheckCircle size={20} className="text-blue-400 mr-2"/>
              <span className="flex-1 break-all line-through">
              Labore ea sit et amet ad ad nulla proident. Laboris elit do nostrud incididunt elit 
              ad ipsum esse esse minim do. Culpa sit occaecat eiusmod laborum irure proident sunt 
              anim enim fugiat. Cillum sunt quis quis excepteur et consectetur reprehenderit labore 
              exercitation duis quis et tempor.</span>
              <FiTrash size={20} className="text-gray-500 ml-2"/>
              </div>
            </li>
            <li className="flex-col items-center text-xs bg-zinc-800 rounded text-zinc-500 p-4 mb-3 w-full">
              <div className="flex flex-nowrap justify-between">
              <CheckCircle size={20} className="text-blue-400 mr-2"/>
              <span className="flex-1 break-all line-through">Labore ea sit et amet ad ad nulla proident. 
              Laboris elit do nostrud incididunt elit ad ipsum esse esse minim do. Culpa sit 
              occaecat eiusmod laborum irure proident sunt anim enim fugiat. Cillum sunt quis 
              quis excepteur et consectetur reprehenderit labore exercitation duis quis et tempor.</span>
              <FiTrash size={20} className="text-gray-500 ml-2"/>
              </div>
            </li>
          </ul>     
      </div>
    </main>
   </div>
  );
}
