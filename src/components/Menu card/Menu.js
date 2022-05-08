import React from 'react'
import { Link } from 'react-router-dom'
import t1 from '../img/cf3.jpg'
import t2 from '../img/cf6.jpg'
function Menu() {

  const drinks = [
    
      {id : 1 , drinkname : 'black', image : t1, price : '$10'},
      {id : 2 , drinkname : 'grn', image : t2, price : '$20'}
    
  ]

  return (
    <div>
       <di className="card">

{
  drinks && drinks.map(drink =>
    
     <div className="card1">
       <Link to={`${drink.drinkname}/${drink.price}`} >
       <img src={drink.image} alt= ''/>
       <p> {drink.drinkname}</p>
       <p> {drink.price}</p>
       </Link>

     </div>

   )
}

</di>

    </div>
  )
}

export default Menu