import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

export const TodoList = () => {
    const [getTodos, setGetTodos] = useState(null)

    const fetchUserData = async () =>{
        const resp = await axios.get("/fetchTodos");
        //console.log(resp);
        console.log(resp.data);
        
        if(resp.data.length > 0){
            setGetTodos(resp.data);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [getTodos])


    //edit




    //delete
    const handleDelete = async(todo) => {
        const resp = await axios.delete(`/deleteTodo/${todo._id}`);
        window.confirm("Are you sure you want to delete this todo.");
        console.log(resp);
    }
  return (
        <div>
        <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            All Todo's
          </h1>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Title
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Description
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Edit
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              { getTodos && getTodos.map((todo) =>(
                <tr>
                <td className="px-4 py-3">{todo.title}</td>
                <td className="px-4 py-3">{todo.description}</td>
                <td className="px-4 py-3">
                  <button
                    className="hover:text-green-500">
                    Edit
                  </button>
                </td>
                <td className="px-4 py-3 text-lg text-gray-900">
                  <button
                    className="hover:text-red-500" onClick={() => handleDelete(todo)}>
                    Delete
                  </button>
                </td>
              </tr>
              ))}   
            </tbody>
          </table>
        </div>
      </div>
    </section>
    </div>
  )
}
