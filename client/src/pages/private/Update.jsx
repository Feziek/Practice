import { Link, useLocation, useNavigate } from "react-router-dom"

import { useState } from "react"

import { Chatbot } from "@components/Bot/Chatbot"

import axios from "axios"

export const Update = () => {

  const [ book, setBook ] = useState({
    title: "",
    description: "",
    price: "",
    cover: "",
  })

  const [ error, setError ] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const bookId = location.pathname.split("/")[ 2 ]

  const handleChange = (e) => {
    setBook((prev) => ({ 
      ...prev, 
      [ e.target.name ]: e.target.value 
    }))
  }

  const handleClick = async (e) => {
    e.preventDefault()

    try {
      await axios.put(`/api/books/${ bookId }`, book)
      navigate("/")
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-extrabold text-gray-800 mb-6 text-center">
          Update the Book
        </h1>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Book title"
            name="title"
            onChange={ handleChange }
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
          />

          <textarea
            rows={ 5 }
            placeholder="Book description"
            name="description"
            onChange={ handleChange }
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none transition"
          />

          <input
            type="number"
            placeholder="Book price"
            name="price"
            onChange={ handleChange }
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
          />

          <input
            type="text"
            placeholder="Book cover URL"
            name="cover"
            onChange={ handleChange }
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
          />

          <button
            onClick={ handleClick }
            className="bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-black hover:scale-[1.02] transition duration-200"
          >
            Update
          </button>

          {error && (
            <p className="text-red-500 text-sm text-center">
              Something went wrong. Please check all required fields and try again.
            </p>
          )}

          <Link
            to="/"
            className="text-center text-gray-600 hover:text-gray-900 hover:underline text-sm transition"
          >
            See all books
          </Link>
        </div>
      </div>
      <Chatbot />
    </div>
  )
}