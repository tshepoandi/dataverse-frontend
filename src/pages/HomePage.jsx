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
    <main className='mx-auto  max-w-4xl'>
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
      <div className=''>
        <div className='text-center'>
          <ul className='grid my-16 grid-rows-4 grid-flow-col gap-4 justify-center align-center'>
            {data.length > 0 && (
            Object.keys(data[0]).map((key)=>{
              return (
                <li className='text-white px-4 py-2 font-semibold bg-green-800 hover:bg-green-900 rounded-xl'>{key}</li>
              )
            })
          )}
          </ul>
          
        </div>
        <div>
          {
            data.length > 0 && (
              <LineChart data={data} xAxis="Age_Group" yAxis="Revenue"/>
            )
          }
        </div>
        
        

      </div>
    </main>
  )
}

export default HomePage

