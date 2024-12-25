import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex justify-center items-center w-full h-screen bg-gradient-to-b  from-slate-700 via-gray-600 to-slate-500 ">
<div className="flex flex-col gap-8 text-white justify-between items-center">
<h1 className="lg:text-3xl text-xl font-bold  ">SEE OUR CARDS IN:</h1>
<div className="grid md:grid-cols-2 grid-cols-1 gap-5 text-black ">
<Link href="/CSR" className=" md:text-[30px] text-[20px] text-center"><div className="bg-gradient-to-t from-slate-300 via-gray-200 to-slate-100 w-auto h-auto flex flex-col justify-between items-center md:p-5 p-2 border-solid border-[5px] border-black rounded-lg md:shadow-[8px_8px_3px_rgba(67,68,69,1)] shadow-[4px_4px_3px_rgba(67,68,69,1)] scale-100 hover:scale-95  duration-200 active:rotate-[10deg]" >Client Side Rendering <br/>(CSR)</div></Link>
<Link href="/SSR" className="md:text-[30px] text-[20px] text-center"><div className="bg-gradient-to-t from-slate-300 via-gray-200 to-slate-100 w-auto h-auto flex flex-col justify-between items-center md:p-5 p-2 border-solid border-[5px] border-black rounded-lg md:shadow-[8px_8px_3px_rgba(67,68,69,1)] shadow-[4px_4px_3px_rgba(67,68,69,1)] scale-100 hover:scale-95  duration-200 active:rotate-[10deg]" >Server Side Rendering<br/> (SSR)</div></Link>
</div>
</div>

    </div>
  );
}
