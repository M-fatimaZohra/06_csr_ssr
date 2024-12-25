"use client"
import { useEffect, useState } from "react";
import React from 'react'
import { Abril_Fatface } from 'next/font/google'
import { Alegreya } from 'next/font/google'
import { BsStars } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";


const alegreya = Alegreya({ subsets: ['latin'], weight:['400'] })
 


const AbrilFatface = Abril_Fatface({ subsets: ['latin'], weight:['400'] })

interface Rating{
"rate": number,
  "count": number
}
interface Shopping   
{"id": number, //done
"title": string, //done
"price": number, //done
"description": string, //done
"category": string, //done
"image": string, //applied but not rendering properly yet 
"rating": Rating  //done
}

function Page() {

  const [data, setData] = useState<Shopping[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //fetch data
    const fetchData = async () => {
      const products = await fetch(
        "https://fakestoreapi.com/products"
      );
      const convertor: Shopping[] = await products.json();
      console.log("checking", convertor);
      setData(convertor);
      
    };
    fetchData();
//create loader
    setLoading(true);
    setTimeout(() => {
      console.log("this is running before component load");
      setLoading(false);
    }, 5000);
  }, [5000]);

  const load = <div className="flex justify-center items-center h-screen" ><div className="border-solid border-[#fff829] border-b-[5px] border-t-[3px] w-auto h-auto animate-spin rounded-full duration-500 "> <div className=" m-3 flex justify-center items-center border-solid border-[#c5ff27] border-[5px] w-[50px] h-[50px] animate-spin rounded-full duration-500  "></div></div></div>
  
 
  
  return (
    <div className="flex justify-center items-center gap-5 p-5 h-auto bg-gradient-to-b  from-slate-700 via-gray-600 to-slate-500 text-black ">
       <div className="flex justify-center items-center min-h-screen  ">
       {loading ? load : 
       <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 p-5 h-full '>

      { data.map((items, index) => (
         
        <div key={index} className='flex flex-row justify-center items-center '>
        <div className='scale-95 hover:scale-100 duration-200 bg-gradient-to-t from-slate-300 via-gray-200 to-slate-100 flex flex-col justify-between items-center w-auto h-[500px] p-[10px] border-solid border-[4px] border-black rounded-lg gap-4 '>
       
           
                  <h1 className='text-[20px] font-bold text-center overflow-hidden w-[280px] px-2  text-ellipsis line-clamp-3' style={AbrilFatface.style}>{items.title}</h1>
                    <div className="flex justify-center items-center h-[200px] w-full overflow-hidden border-2 border-solid border-black rounded-md ">
                    <img src={items.image} alt={items.category} width="300px" height="100px" className="rounded-md" />
                   
                    </div>
                  <div className='flex flex-col gap-2 items-center w-full h-auto ' style={alegreya.style}>
                  <p className="overflow-hidden w-[280px] px-2  text-ellipsis text-[12px] line-clamp-4"  style={alegreya.style}>
                   {items.description}
                    </p>
                   
                    <div className='flex flex-col px-2  justify-center gap-[4px]  items-center w-full h-auto text-[18px] '>
                    <div className='flex  justify-start   items-center w-full h-auto text-[18px] '>{items.category}</div>
                    <div className='flex flex-row justify-between   items-center w-full h-auto text-[18px] '>
                      <div>{items.price}$</div>
                     
                      <div className='flex flex-col justify-center  items-center w-auto h-auto text-[18px] '>
                       
                      <div className="flex flex-row justify-center items-center gap-1"><BsStars className="text-yellow-400" />{items.rating.rate}</div>
                      <div className="flex flex-row justify-center items-center gap-1"> {items.rating.count > 300 ? <FaArrowUp className="text-green-600" /> : <FaArrowDown className="text-red-600" />}{items.rating.count}</div> 
                      </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  
       </div>
      ))}
</div>
      }
     </div>

     
    </div>
    
   
  )
}

export default Page
