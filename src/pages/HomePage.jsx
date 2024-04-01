import React from 'react'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <main className='mx-auto max-w-4xl'>
      <div className='py-12 px-8 text-start'>
        <h1 className='py-4 capitalize text-4xl font-bold'>
          Upload Your Data Here
        </h1>
        <div>
        <div className="relative">
  <input
    className="hidden"
    id="file"
    type="file"
    name="file"
    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
  />
  <label
    htmlFor="file"
    className="inline-block bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-xl cursor-pointer"
  >
    Upload File
  </label>
</div>

        </div>
      </div>
      <div className=''>

      </div>

    </main>
  )
}

export default HomePage