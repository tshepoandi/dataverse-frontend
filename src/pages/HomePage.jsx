import React from 'react'
import { useState } from 'react'
import * as XLSX from 'xlsx';

import LineChart from '../components/Charts/LineChart';




const HomePage = () => {
  const [data,setData] = useState([])
  const [header,setHeader] = useState("")
  const [xAxis,setXaxis] = useState("")
  const [yAxis,setYaxis] = useState("")
  const [array,setArray] = useState([])

  const handleYaxis = (e) => {
    setYaxis(e.target.value)
    console.log(yAxis)
    
  }
  const handleXaxis = (e) => {
    setXaxis(e.target.value)
    console.log(xAxis)
    
  }
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
          Upload Your <span className='text-green-800'>Excel Worksheet</span>  Here
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
          <div>
            
          </div>
        </div>
      </div>
      {/* options */}
      <div className=''>
        <div className='text-center'>
          <ul className='grid my-16 grid-rows-5 grid-flow-col gap-4 justify-center align-center'>
            {data.length > 0 && (
            Object.keys(data[0]).map((key)=>{
              return (
                <li key={key} 
                    className="">
                  <h1 
                    className=''  
                    >
                    {key} 
                  </h1>
                  
                </li>
              )
            })
          )}
          </ul>
          {
            data.length > 0 && (
              <div className='flex justify-center align-center gap-8'>
                <div className='flex gap-2'>
                  <input type="text"  
                        className="" 
                        onChange={handleXaxis}
                        placeholder='Set Your X Axis'
                  />
                </div>
                <div className="flex gap-2">
                <input type="text"  
                        className="" 
                        onChange={handleYaxis}
                        placeholder='Set Your Y Axis'
                  />
                </div> 
              </div>
            )
          }
          
          
        </div>
        <div className=''>
          {
            data.length > 0 && (
              <LineChart data={data} xAxis={xAxis} yAxis={yAxis}/>
            )
          }
          {console.log(data)}
        </div>
        
        

      </div>
    </main>
  )
}

export default HomePage

