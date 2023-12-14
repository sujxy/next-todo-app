import ToDoItem from "@/components/ToDoItem";
import { prisma } from "@/db";
import Link from "next/link";


async function toggleToDo(id: string, complete: boolean) {
  "use server" 
  
  await prisma.toDo.update({ where: { id }, data: { complete } }); 
}
 
export default async function Home() {

  const toDos = await prisma.toDo.findMany(); 
  // await prisma.toDo.create({ data: { title: "run errands", complete: false } }); 
  
  return (
    <>
      <header className='flex p-5 justify-between items-center'>
      <h1 className='text-3xl font-light '>My ToDos</h1>
      <Link href='./addToDo' className="px-4 py-1 shadow-md rounded-full border hover:bg-slate-50 hover:text-slate-800">Add+</Link>
      </header>
      <div className='w-1/3 mx-auto my-8'>
        <h1 className='text-center text-xl italic font-thin'>Lets go you can do this !</h1>
        <ul className='flex flex-col gap-2 items-center justify-normal my-2'>{toDos?.map((todo) => <ToDoItem key={todo.id} {...todo} toggleToDo={toggleToDo}  />)}</ul>
      </div>
       
    </>
    
  )
}
