import React from 'react'
import { Abril_Fatface } from 'next/font/google'
import { Alegreya } from 'next/font/google'

const alegreya = Alegreya({ subsets: ['latin'], weight:['400'] })
 


const AbrilFatface = Abril_Fatface({ subsets: ['latin'], weight:['400'] })
interface Novels {

id: number,
name: string,
type: string,
available: boolean
}

async function page() {

    const getApi =await fetch("https://simple-books-api.glitch.me/books/")

    const convertor:Novels[] = await getApi.json()

    console.log("todos >>>", convertor);

    const avalible = <p className='text-[#24841d]'>avalible</p>
    const notAvalibleYet = <p className='text-[#841d1d]'>not avalible yet</p>

  return (
    <div className='md:h-screen lg:h-auto h-auto bg-gradient-to-b  from-slate-700 via-gray-600 to-slate-500 text-black'>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5 '>
        {
            convertor.map((novel: Novels, index) => (
                <div key={index}  className='flex flex-row justify-center items-center  ' >

                    <div className='scale-95 hover:scale-100 duration-200 bg-gradient-to-t from-slate-300 via-gray-200 to-slate-100 flex flex-col justify-center items-center w-[300px] h-[300px] p-[10px] border-solid border-[4px] border-black rounded-lg gap-4 '>
                    <h1 className='text-3xl font-bold text-center' style={AbrilFatface.style}>{novel.name}</h1>
                    <div className='flex flex-col gap-2 items-center w-full' style={alegreya.style}>
                    <p className='text-[20px]'>{novel.type}</p>
                    <div className='text-[18px]'>{novel.available ? avalible : notAvalibleYet}</div>
                    </div>
                    </div>
                </div>
            ))
        }
      
    </div>
    </div>
  )
}

export default page
