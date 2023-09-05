import {TbTrash} from "react-icons/tb"
import {BsFillCheckCircleFill} from "react-icons/bs"

export default function Task({ task, onComplete, onDelete }) {

    const pIncompleteEstilizado = "text-sm leading-5 text-gray-200 mr-auto"
    const pCompleteEstilizado = "text-sm leading-5 text-gray-200 mr-auto text-gray-600 line-through"

    return (
    <div className="w-full bg-gray-900 p-4 rounded-lg flex items-center justify-between border border-blue-500/20 shadow-xl gap-3">
        <button className="w-4 h-4 bg-none border-0" onClick={() => onComplete(task.id)}>
            {task.isCompleted ? <BsFillCheckCircleFill /> : <div className="w-full h-full rounded-full border-2 border-slate-400"/>}
        </button>

        <p className={task.isCompleted ? pCompleteEstilizado : pIncompleteEstilizado}>{task.title}</p>

        <button className="bg-none border-0 text-gray-600" onClick={() => onDelete(task.id)}>
            <TbTrash size={20} />
        </button>
    </div>
    )
}
