import React from 'react'
import {  useParams } from 'react-router-dom'
const ProductDtails = ({drinks}) => {

    const {name, price} = useParams()

  return (
    <div>
        <img src={drinks.image} alt= ''/>
       <p> {name}</p>
       <p> {price}</p>
    </div>
  )
}

export default ProductDtails