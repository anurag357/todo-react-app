import React, { useState } from 'react'
import axios from 'axios'

export const TodoForm = () => {
     //store data from frontend
     const [title, setTitle] = useState("")
     const [description, setDescription] = useState("")
 
 
     //function create to send data
     const submitData = async() =>{
         const data ={
             title: title,
             description: description
         }
 
         const res = await axios.post("/createTodo", data);
         console.log(res);
     };
 
     const handleSubmit = (event) =>{
         event.preventDefault();
         submitData();
         setTitle("");
         setDescription("");
     };

    return (
        <div>
            <form onSubmit={handleSubmit}>
              <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-8 mx-auto">
                  <div className="flex flex-col text-center w-full mb-6">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                      Create Todo
                    </h1>
                  </div>
                  <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            htmlFor="title"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Title
                          </label>
                          <input
                            type="text"
                            id="title"
                            name="title"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                          />
                        </div>

                        <div className="relative">
                          <label
                            htmlFor="descrption"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Description
                          </label>
                          <input
                            type="description"
                            id="description"
                            name="description"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={description}
                            onChange={(event) =>setDescription(event.target.value)}
                          />
                        </div>

                      </div>
                      
                      <div className="p-2 w-full">
                        <button
                          type="submit"
                          className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
          </form>
        </div>
      )
}
