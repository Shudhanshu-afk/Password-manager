import React from 'react'
import { useState } from 'react'
import Manager from './Manager';

const List = ({ pass }) => {
    // const [item, setitem] = useState([{}]);
    // const additem = (data)=>{
    //     setitem((curritem)=>{
    //          return [...curritem, {...data}]
    //     })
    // }
    return (
        <>
              
            <div className='flex justify-center'>
                <div className='w-2/3'>

                    <h1 className='font-bold p-3'>Your passwords</h1>
                    <div className='flex  bg-white'>
                        <div className="first w-2/5 ">
                            <div className='bg-gray-900 text-white flex justify-center items-center h-8'><h1>website</h1></div>
                            <div className='flex justify-center'>
                                <ul>
                                    {pass.map((i) => {
                                        return <li key={i._id}>{i.website}</li>
                                    })}
                                </ul>


                            </div>
                        </div>
                        <div className="second w-1/5">
                            <div className='bg-gray-900 text-white flex justify-center items-center h-8'>Username</div>
                            <div className='flex justify-center'>
                                <ul>
                                    {pass.map((i) => {
                                        return <li key={i._id}>{i.username}</li>
                                    })}
                                </ul>


                            </div>
                        </div>
                        <div className="third w-1/5">
                            <div className='bg-gray-900 text-white flex justify-center items-center h-8'>Password</div>
                            <div className='flex justify-center'>
                                <ul>
                                    {pass.map((i) => {
                                        return <li key={i._id}>{i.password} </li>
                                    })}
                                </ul>


                            </div>
                        </div>
                        <div className="fourth w-1/5">
                            <div className='bg-gray-900 text-white flex justify-center items-center h-8'>Actions</div>
                            <div className='flex justify-center'>
                                <svg onClick={remove} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                </svg>
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                </svg>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default List
