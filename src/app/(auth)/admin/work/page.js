"use client"
import { useState, useEffect } from 'react'

const ItemCard = ({label, value})=>{
    return (
        <div className='flex gap-4 bg-white  rounded-md m-2 p-2'>
            <div>{ label }</div>
            <div>{ value }</div>
        </div>
    )
    
}

export default function Adminwork() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

    async function onLoadData() {
        setLoading(true)
        let res = await fetch('/api/contact')
        let data = await res.json()
        setData(data)
        setLoading(false)
    }

    useEffect(() => {
        onLoadData()
    }, [])

   return (
        <> 
            <h2 className="text-center text-3xl w-full">Get In Touch</h2>
            
            <p className="text-center margin-0 mx-auto w-2/3	">
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
                ipsum lorem ipsum lorem ipsum 
            </p>

            <div className="flex mt-16 place-content-center">
                <div className="md:w-3/4 px-4 ">
                    <div className=" bg-white p-10  rounded-xl">
                        <h3 className="text-2xl py-2">Add Experience</h3>   
                        <div className="flex gap-3">
                        <div className="w-full my-2">
                            <label>Title</label>
                            <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Ex: Retail Sales Manager" type="text" name="search"/>
                        </div>
                        <div className="w-full my-2">
                            <label>Employment type</label>
                            <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Please select" type="text" name="search"/>
                        </div>
                        </div>
                        <div className="w-full my-2">
                            <label>Company Name</label>
                            <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Ex: Microsoft" type="text" name="search"/>
                        </div>
                        <div className="w-full">
                            <label>Location</label>
                            <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Ex: London, United Kingdom" type="text" name="search"/>
                        </div>
                        <div className="w-full">
                            <label>Location Type</label>
                            <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Please Select" type="text" name="search"/>
                        </div>
                        <div className="w-full py-2">
                            <button className="mx-0 h-9 mt-2 items-center justify-center px-6  rounded-md bg-blue-500 text-white ">
                                <label>Save new</label>
                            </button>
                        </div>
                    </div>
                </div>
               
            </div>

        </>
    );
}
