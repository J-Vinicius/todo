import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai"

export default function Header({ onAddTask }) {
  const [title, setTitle] = useState("")

  function handleSubmit(event) {
    event.preventDefault();
    onAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className="flex items-center justify-center h-24 relative bg-gray-950">
        <h2 className="text-xl text-bold">Todo - Lista de Afazeres</h2>
        <form onSubmit={handleSubmit} className="absolute h-10 -bottom-4 w-full max-w-2xl flex gap-2 px-4">
          <input className="h-full flex-1 text-white bg-slate-800 border-0 rounded shadow placeholder-shown:text-gray-500 p-2" placeholder="Adicionar nova tarefa" type="text" value={title} onChange={onChangeTitle}/>
          <button className="h-full px-4 bg-blue-500 text-white border-0 rounded flex items-center gap-1.5 font-bold text-sm">
            Novo
            <AiOutlinePlusCircle size={20} />
          </button>
        </form>
    </header>
  )
}
