"use client"
import React, { useEffect, useState } from "react";

const TableTodo = ({  onEdit, onDelete }) => {
   const [todos, setTodos] = useState([]);

   // Simulasi pemuatan data menggunakan useEffect
   useEffect(() => {
     // Simulasi dummy data dari server atau API
     const fetchTodos = async () => {
       const dummyData = [
         {
           title: "Buy groceries",
           description: "Milk, Bread, Cheese",
           completed: false,
         },
         {
           title: "Work on project",
           description: "Complete the dashboard",
           completed: true,
         },
         {
           title: "Exercise",
           description: "Go for a 30-min walk",
           completed: false,
         },
         {
           title: "Read a book",
           description: "Finish 2 chapters",
           completed: true,
         },
       ];
       // Simulasi waktu pemuatan data (2 detik)
       setTimeout(() => {
         setTodos(dummyData);
       }, 2000);
     };

     fetchTodos();
   }, []);

  
  return (
    <div className="overflow-x-auto w-full ">
      <table className="table-auto w-full border-collapse border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
              Title
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700">
              Description
            </th>
            <th className="border border-gray-200 px-4 py-2 text-center text-sm font-medium text-gray-700">
              Completed
            </th>
            <th className="border border-gray-200 px-4 py-2 text-center text-sm font-medium text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-200 px-4 py-2 text-gray-700">
                {todo.title}
              </td>
              <td className="border border-gray-200 px-4 py-2 text-gray-700">
                {todo.description}
              </td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${
                    todo.completed
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}>
                  {todo.completed ? "Yes" : "No"}
                </span>
              </td>
              <td className="border border-gray-200 px-4 py-2 ">
                <button
                  onClick={() => onEdit(todo)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm mr-2 hover:bg-blue-600">
                  Edit
                </button>
                <button
                  onClick={() => onDelete(todo)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md text-sm mr-2 hover:bg-red-600">
                  Delete
                </button>
                {!todo.completed && (
                  <button
                    onClick={() => onComplete(todo)}
                    className="bg-green-500 text-white px-3 py-1 rounded-md text-sm hover:bg-green-600">
                    Complete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTodo;
