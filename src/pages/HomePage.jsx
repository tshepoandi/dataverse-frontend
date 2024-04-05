import React from 'react'
import { useState } from 'react'
import * as XLSX from 'xlsx';
import axios from 'axios'
import { useEffect } from 'react'

const HomePage = () => {
  const [data,setData] = useState([])
  const [xAxis,setXaxis] = useState("")
  const [yAxis,setYaxis] = useState("")
  const [analysis,setAnalysis] = useState("")
  const [loading, setLoading] = useState(false);
 


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
    reader.onload = async(event) => {
    const fileData = event.target.result
    const workbook = XLSX.read(fileData,{type: 'binary'})
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]
    const parsedData = XLSX.utils.sheet_to_json(sheet)
    setData(parsedData)
   

    let prompt = "<strong>Perform a comprehensive analysis on the provided dataset to extract actionable insights for enhancing company performance.</strong><br><br>";

    parsedData.forEach((item, index) => {
      prompt += `<strong>Entry ${index + 1}:</strong><br>`;
      Object.entries(item).forEach(([key, value]) => {
        prompt += `<strong>${key}:</strong> ${value}<br>`;
      });
      prompt += "<br>";
    });


    try {
      const response = await axios.post('http://localhost:3000/api/send-prompt', {
        prompt: prompt
      });
      setAnalysis(response.data.generatedText);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Set loading to false after the data is fetched and processed
    }
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
          <div className='my-20'>
          {
            loading && <span className="loading loading-infinity loading-lg"></span>
          }
          {
            analysis.length !== 0 && (
              <div>
                {analysis.split('**' || '##').map((section, index) => {
                  if (index % 2 === 0) {
                    return <p key={index}>{section}</p>;
                  } else {
                    return <p key={index}><strong>{section}</strong></p>;
                  }
                })}
                <div className='bg-green-700 w-28 px-4 py-2 rounded-xl my-2 text-white font-semibold hover:bg-green-800'>
                  <button>Save Data</button>
                </div>
              </div>
            )
          }
          </div>
        </div>
      </div>
      {/* options */}
      <div className=''>
        
      </div>
    </main>
  )
}

export default HomePage

