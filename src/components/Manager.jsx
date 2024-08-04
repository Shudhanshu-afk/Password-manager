import React from 'react'
import { useState, useEffect } from 'react'
import List from './List';
import axios from 'axios'
import Copytext from './Copytext';

const Manager = () => {
    const [data, setdata] = useState({ website: "", username: "", password: "" });
    const [passwordArray, setpasswordArray] = useState([]);
    const quant = passwordArray.length;
    // useEffect(() => {
    //     let passwords = localStorage.getItem("passwords")
    //     if (passwords) {
    //         setpasswordArray(JSON.parse(passwords));
    //     }
    // })
    const update = (evt) => {
        setdata((currdata) => {
            currdata[evt.target.name] = evt.target.value;
            return { ...currdata }
        })
    }
    const save = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/', { ...data });
            console.log(response.data);
        } catch (error) {
            console.error('There was an error submitting the data!', error);
        }
        // let res= fetch("http://localhost:3000/")

        // e.preventDefault();
        // console.log(data);

        // add(data);
        setdata({ website: "", username: "", password: "" });
    }
    const getpasswords = async () => {
        let req = await fetch("http://localhost:3000/");
        let passwords = await req.json();
        setpasswordArray(passwords);


    }
    useEffect(() => {
        getpasswords();
    })
    const remove = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/${id}`);
            console.log(id);
            console.log(response.data);
        } catch (error) {
            console.error('There was an error deleting the data!', error);
        }
    }
    const edit = async (item) => {
     
        setdata(item);
        try {
            const response = await axios.delete(`http://localhost:3000/${item._id}`);
            console.log(item._id);
            console.log(response.data);
        } catch (error) {
            console.error('There was an error deleting the data!', error);
        }

       
    }

    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className='conatainer  flex  justify-center mt-20'>


                <div className='w-3/4  flex flex-col gap-7'>
                    <div className='text-gray-900 flex justify-center text-4xl'>
                        <h1>Your own password manager</h1>
                    </div>
                    <div className='flex justify-center'>

                        <input name='website' value={data.website} className='w-3/4  border-2 border-gray-900 rounded-2xl px-3' type="text" placeholder='Enter website URL' onChange={update} />
                    </div>
                    <div className="flex justify-center gap-2">
                        <input name='username' value={data.username} className='border-2 border-gray-900 rounded-2xl w-1/2 px-3' type="text" placeholder='Enter Username' onChange={update} />
                        <input name='password' value={data.password} className='border-2 border-gray-900 rounded-2xl w-1/4 px-3' type="text" placeholder='Enter Password' onChange={update} />
                    </div>
                    <div className='flex justify-center '>
                        <button onClick={save} className='text-white bg-gray-900 py-3 px-5 rounded-2xl hover:bg-gray-700 flex'>

                            Save
                            <svg class="invert w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.414A2 2 0 0 0 20.414 6L18 3.586A2 2 0 0 0 16.586 3H5Zm3 11a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6H8v-6Zm1-7V5h6v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M14 17h-4v-2h4v2Z" clip-rule="evenodd" />
                            </svg>


                        </button>
                    </div>

                </div>

            </div>

            <div className='flex justify-center'>
                <div className='w-2/3'>
                    {!passwordArray.length ? "No passwords to show" : <> <h1 className='font-bold p-3'>Your passwords</h1>
                        <div className='flex  bg-white border rounded-lg gap'>
                            <div className="first w-2/5  ">
                                <div className='bg-gray-900 text-white flex justify-center items-center h-8 rounded-tl-lg'><h1>website</h1></div>
                                <div className='flex justify-center m-1'>
                                    <ul>
                                        {passwordArray.map((i) => {
                                            return <li key={i._id}><a href='' target='_blank'>{i.website}</a></li>
                                        })}
                                    </ul>


                                </div>
                            </div>
                            <div className="second w-1/5">
                                <div className='bg-gray-900 text-white flex justify-center items-center h-8 '>Username</div>
                                <div className='flex justify-center m-1'>
                                    <ul>
                                        {passwordArray.map((i) => {
                                            return <li key={i._id}><div className='flex '>{i.username} <Copytext text={i.username} />
                                            </div></li>
                                        })}
                                    </ul>


                                </div>
                            </div>
                            <div className="third w-1/5">
                                <div className='bg-gray-900 text-white flex justify-center items-center h-8'>Password</div>
                                <div className='flex justify-center m-1'>
                                    <ul>
                                        {passwordArray.map((i) => {
                                            return <li key={i._id}><div className='flex '>{i.password} <Copytext text={i.password} />
                                            </div></li>
                                        })}
                                    </ul>


                                </div>
                            </div>
                            <div className="fourth w-1/5">
                                <div className='bg-gray-900 text-white flex justify-center items-center h-8 rounded-tr-lg'>Actions</div>
                                <div className='flex justify-center m-1'>
                                    <ul>
                                        {passwordArray.map((i) => {
                                            return (<li key={i._id}>
                                                <div className='flex gap-1'>
                                                    <svg onClick={()=>{edit(i)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                                                        <path d="M15.2141 5.98239L16.6158 4.58063C17.39 3.80646 18.6452 3.80646 19.4194 4.58063C20.1935 5.3548 20.1935 6.60998 19.4194 7.38415L18.0176 8.78591M15.2141 5.98239L6.98023 14.2163C5.93493 15.2616 5.41226 15.7842 5.05637 16.4211C4.70047 17.058 4.3424 18.5619 4 20C5.43809 19.6576 6.94199 19.2995 7.57889 18.9436C8.21579 18.5877 8.73844 18.0651 9.78375 17.0198L18.0176 8.78591M15.2141 5.98239L18.0176 8.78591" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M11 20H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                                    </svg>
                                                    <svg onClick={() => remove(i._id)} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                                    </svg>
                                                </div>
                                            </li>)
                                        })}


                                    </ul>

                                </div>
                            </div>
                        </div> </>}


                </div>
            </div>

        </>

    )
}

export default Manager
