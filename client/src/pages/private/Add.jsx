import { Link, useNavigate } from "react-router-dom"

import { useState } from "react"

import axios from "axios"

export const Add = () => {
  const [ book, setBook ] = useState({
    title: "",
    description: "",
    price: "",
    cover: "",
  })
  const [ error, setError ] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setBook((prev) => ({ 
      ...prev, 
      [ e.target.name ]: e.target.value 
    }))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post("/api/books", book)
      navigate("/")
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg">
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add New Book
        </h1>

        <form className="flex flex-col gap-4">
          
          <input
            type="text"
            placeholder="Book Title"
            name="title"
            onChange={ handleChange }
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows={ 4 }
            placeholder="Book Description"
            name="description"
            onChange={ handleChange }
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            placeholder="Price"
            name="price"
            onChange={ handleChange }
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Cover Image URL"
            name="cover"
            onChange={ handleChange }
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error && (
            <span className="text-red-500 text-sm">
              Something went wrong. Please try again.
            </span>
          )}

          <button
            onClick={ handleClick }
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Add Book
          </button>

          <Link
            to="/"
            className="text-center text-gray-600 hover:text-blue-600 transition"
          >
            Back to all books
          </Link>
        </form>
      </div>
    </div>
  )
}

