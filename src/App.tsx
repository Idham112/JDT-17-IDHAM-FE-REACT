import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/button/Index';
import Box from './components/box';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Pertama kali di render");
    return () => {
    }
  }, [])

  useEffect(() => {
    console.log("ke trigger kalau count berubah")
  }, [count])
  
  const Experience = [
    {
      title: "PT Indivara Group",
      desc: "Frontend Developer yang mengerjakan 3 aplikasi distribution management system"
    },
    {
      title: "PT Mantep",
      desc: "PT paling mantep sedunia banyak customer yang mau beli"
    },
  ]

  return (
    <>
    <div className='flex flex-row gap-5'>
      {Experience.map((el, index) => {
      return <Box key={index} title={el.title} desc={el.desc} index={index}/>
    })}
    </div>
    
    </>
  )
}

export default App
