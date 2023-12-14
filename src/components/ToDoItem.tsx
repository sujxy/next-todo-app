"use client"

type ToDoItemProps = {
    id: string,
    title: string,
    complete: boolean ,
    toggleToDo : (id : string , compmlete : boolean) => void ,
}; 

export default function ToDoItem({ id, title, complete ,toggleToDo }: ToDoItemProps) {
    return <li className={`flex  justify-start items-center gap-3 px-3 py-1 border  ${complete?"border-slate-700":" border-slate-500"} rounded-lg w-2/3`} >
        <input type="checkbox" id={id} className='peer cursor-pointer' defaultChecked={complete}  onChange={(e) => toggleToDo(e.target.id , e.target.checked)}/>
        <label htmlFor={id} className="font-light text-xl peer-checked:line-through peer-checked:text-slate-700">{title}</label>
    </li>
}