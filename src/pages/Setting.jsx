import React from 'react'
import { useState } from 'react';
export default function Setting() {


const [formData, setFormData] = useState({
  title: '',
  author: '',
  category: '',    // current input value as string
  categories: [],  // the list of categories added
  description: '',
  price: '',
  image: '',
});

  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value,
  }));
};
  const addCategory = () => {
  const newCat = formData.category.trim();
  if (!newCat) return;

  setFormData(prev => ({
    ...prev,
    categories: [...prev.categories, newCat],
    category: '', // clear the input
  }));
};
  return (

    <>
    <div className='flex w-full gap-12'>
    <div className='mt-6 w-full'>
       <p>Create Books</p>
       {/*Title*/}
      <div className="mb-5 mt-12">
          <label htmlFor="base-input" className="block mb-2 text-sm font-medium ">Title</label>
          <input type="text" value={formData.title} onChange={handleChange} id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
   {/*Title*/}
      <div className="mb-5 ">
          <label htmlFor="base-input" className="block mb-2 text-sm font-medium ">Author</label>
          <input type="text" value={formData.author} onChange={handleChange} id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
   
<div className="flex items-center justify-center w-full">
    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
    <p className='text-gray-400'>image</p>
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file"  value={formData.image} onChange={handleChange}type="file" className="hidden" />
    </label>
</div> 

  
        
    </div>
    <div className='w-full mt-24'>
        {/*Price*/}
              <div className="mb-5 ">
                  <label htmlFor="base-input" className="block mb-2 text-sm font-medium ">Price</label>
                  <input type="text"  value={formData.price} onChange={handleChange} id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
        {/*Description*/}
              <div className="mb-5 ">
                  <label htmlFor="base-input" className="block mb-2 text-sm font-medium ">description</label>
                  <input type="text"  value={formData.description} onChange={handleChange} id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
        
        {/*Category*/}
        <div className='flex items-center gap-2'>
              <div className="mb-5 ">
                  <label htmlFor="base-input" className="block mb-2 text-sm font-medium ">category</label>
                  <input type="text"   value={formData.category}
  onChange={handleChange} id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
              <button className='bg-blue-500 py-2 text-white px-2 rounded-md'>add</button>
        </div>
                <div>
            {formData.categories.map(c => (
                <span key={c} className="bg-blue-500 rounded-full px-2 py-1 text-white m-2">
                {c}
                </span>
            ))}
            </div>
            <button onClick={addCategory} type='button' className="bg-blue-500 text-white rounded-lg p-2 px-6 m-2">Create  +</button>
    </div>
    </div>
</>
  )
}


