import getjobs from "@/Api/supabaseApi";
import { useEffect, useState } from "react";

export default function AllJobs() {
  const [data, setData]= useState([])


const fetchData = async () => {
  const jobs= await getjobs()
  console.log(jobs)
  setData(jobs)

}

  useEffect(()=>{
    fetchData()
  },[])

  return (
  <>
    
   alljobs
  </>
  )
}
