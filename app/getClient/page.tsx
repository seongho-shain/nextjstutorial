"use client"
import { useEffect, useState } from "react";
export default function Page() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getItems = async () => {
        let data = await fetch('https://dummyjson.com/products/1')
        let json = await data.json()
        setItems(json)
        setIsLoading(false)
    }
    useEffect(()=>{
        getItems();
    }, [])
    
    return (
      <ul>
        {isLoading ? "Loading" : JSON.stringify(items)}
      </ul>
    )
  }