import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createToDo(data: FormData) {
    "use server"
    const title = data.get("title")?.valueOf(); 
    if (typeof title !== 'string' || title.length === 0) {
        throw new Error("inavlid title !");

    }
    await prisma.toDo.create({ data: { title, complete: false } }); 

    redirect("/");
}

export default function addToDo() {
    return <>
      <header className='flex p-5 justify-center items-center'>
      <h1 className='text-3xl font-light '>Add new ToDo !</h1>
        </header>
        <form action={createToDo} className='w-1/3 mx-auto my-8'>
            <h1 className=' text-xl italic font-thin'>We're on a spree!</h1>
            <input type="text" name={"title"} className='my-2 bg-transparent border rounded-md w-full outline-none focus-within:border-slate-400 px-2 py-2 font-light text-xl'  />
            <div className='flex items-center justify-end gap-2 '>
                <Link href='..' className='px-4 py-1 shadow-md rounded-full border  hover:bg-red-600 hover:text-slate-100'>Cancel</Link>
                <button type="submit" className='px-4 py-1 shadow-md rounded-full border hover:bg-slate-50 hover:text-slate-800'>Add Item</button >
            </div>
       </form>
        
        
    </>
   
   
}