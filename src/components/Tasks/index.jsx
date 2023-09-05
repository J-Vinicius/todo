import Task from "../Task"

export default function Tasks({ tasks, onComplete, onDelete }) {

    const divEstilizada = "flex items-center gap-2"
    const pEstilizado = "text-blue-500 text-sm font-bold"
    const spanEstilizado = "bg-gray-800 text-gray-400 text-xs font-bold py-1 px-2.5 rounded-full"
    const listEstilizada = "flex flex-col gap-3"

    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;


    return (
        <section className="w-full mt-12 md:mt-16 max-w-2xl mx-auto px-4">
            <header className="flex items-center justify-between mb-6">
                <div className={divEstilizada}>
                    <p className={pEstilizado}>Tarefas</p>
                    <span className={spanEstilizado}>{tasksQuantity}</span>
                </div>
                <div className={divEstilizada}>
                    <p className={`${pEstilizado} text-purple-500`}>Feitas</p>
                    <span className={spanEstilizado}>{completedTasks} de {tasksQuantity}</span>
                </div>
            </header>
            <div className={listEstilizada}>
                {tasks.map(task => (
                    <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete}/>
                ))}
            </div>
        </section>
    )
}
