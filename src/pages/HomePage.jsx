import React from 'react'
import { useState } from 'react'
import * as XLSX from 'xlsx';

import LineChart from '../components/Charts/LineChart';




const HomePage = () => {
  const [data,setData] = useState([])
  const handleOnChage = (e) => {
    


    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0])
    reader.onload = (event) => {
    const fileData = event.target.result
    const workbook = XLSX.read(fileData,{type: 'binary'})
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]
    const parsedData = XLSX.utils.sheet_to_json(sheet)
    setData(parsedData)
    console.log(parsedData);
    }
  }


  return (
    <main className='mx-auto max-w-4xl'>
      <div className='py-12 px-8 text-start'>
        <h1 className='py-4 capitalize text-4xl md:text-4xl font-bold'>
          Upload Your Data Here
        </h1>
        <div>
          <div 
            className="relative"
            onChange={handleOnChage}
              >
            <input
              className="hidden"
              id="file"
              type="file"
              name="file"
              accept=".xlsx .xls,"
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
      <div className='w-[60%]'>
        {
          data.length > 0 && (
            <LineChart data={data}/>
          )
        }
        

      </div>
    </main>
  )
}

export default HomePage

