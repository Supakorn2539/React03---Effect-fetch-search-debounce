import React from 'react'

export default function ProductList(props) {
 const {product, setproduct} = props

  return (
    <div>
      <ul className='px-12'>
      {product.map(el => (<li  className='list-disc'>{`${el.title} | ${el.category} | ${el.price} |`}</li>))}

      </ul>
    </div>
  )
}
