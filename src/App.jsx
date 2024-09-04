import { useState,useEffect } from "react"

import ProductList from "./ProductList"

function App() {
  const [product, setProduct] = useState([])
  const [searchText, setSearchText] = useState('')
  const [total, setTotal] = useState(10)
  const [page, setPage] = useState(1)
  useEffect(  ()=>{

    const fetchInfo = async () => {
   const resp = await fetch(`https://dummyjson.com/products/search?skip=${page*10-10}&limit=10&q=${searchText}`)
   const result = await resp.json()   
        setProduct(result.products)
        setTotal(result.total)
    }
    fetchInfo() 
    }, [searchText,page] )

function hdlChange(e){
  console.log(e.target.value)
  const timer = setTimeout(()=>{ 
  
  setSearchText(e.target.value)},3000)
  return () => clearTimeout(timer)
}
function hdlClick(num){
  if(page+num < 1){
    return
  } else if(page+num < total/10 +1){

    setPage(page+num)
  }
  
}
  return (
    <>
      
      <h1>Product Search</h1>
      <label>Search :
        <input onChange={(e)=>hdlChange(e)}/>
        <p>total : {total}</p>
      </label>
      <div className="flex gap-2">
        <button onClick={()=>hdlClick(-1)} className="border border-red-500">Prev</button>
        <h3>{page}</h3>
        <button onClick={()=>hdlClick(1)}className="border border-red-500">Next</button>
      </div>
      <hr />
      <ProductList  key={product.id} product={product} setProduct={setProduct}/>
      
    </>
  )
}

export default App
