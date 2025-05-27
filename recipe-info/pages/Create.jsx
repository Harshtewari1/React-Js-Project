import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { nanoid } from 'nanoid';
import { recipecontext } from '../context/RecipeContext';


const Create = () => {
  const { data, setdata } = useContext(recipecontext)

  const { register, handleSubmit, reset } = useForm()
  const SubmitHandler = (recipe) => {
    recipe.id = nanoid()
    console.log(recipe);

    setdata([...data,recipe])
    reset()
  }
  



  


  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <input
        className='border-b outline-0 p-2 block'
        {...register("image")}
        type='url'
        placeholder='enter image url'
      />
      <small className='text-red-400'>error</small>
      <input
        className='border-b outline-0 p-2 block'
        {...register("title")}
        type='text'
        placeholder='Recipe Title'
      />

      <textarea
        className='border-b outline-0 p-2 block'
        {...register("description")}
        placeholder='Recipe Description'
      ></textarea>

      <textarea
        className='border-b outline-0 p-2 block'
        {...register("ingredints")}
        placeholder='write incredents seprated by , '
      ></textarea>

      <textarea
        className='border-b outline-0 p-2 block'
        {...register("instruction")}
        placeholder='Instruction'
      ></textarea>

      <select
        className='border-b outline-0 p-2 block'
        {...register("category")}
      >
        <option className='text-black' value="cat-1">category 1</option>
        <option className='text-black' value="cat-2">category 2</option>
        <option className='text-black' value="cat-3">category 3</option>
      </select>
      <button className='mt-5 block bg-green-500 p-3 rounded-2xl'>Save Recipe</button>
    </form>
  )
}

export default Create