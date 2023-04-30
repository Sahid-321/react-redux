import React, { useEffect } from 'react'

export default function shid({setData, data}) {
  
    useEffect(()=>{
        setData("sahid")
    },[])

  return (
    <div>shid
        <p>{data}</p>
    </div>
  )
}
