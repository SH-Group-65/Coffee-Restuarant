import React from 'react'
import { Link } from 'react-router-dom'
import t1 from '../img/cf3.jpg'
import t2 from '../img/cf6.jpg'
import t3 from '../img/product1.jpg'
import t4 from '../img/product2.jpg'
import t5 from '../img/product3.jpg'
import t6 from '../img/product4.jpg'
import t7 from '../img/product5.jpg'
import t8 from '../img/product6.jpg'
function Menu() {

  const drinks = [
    
      {id : 1 , drinkname : 'Black', image : t1, price : '$10'},
      {id : 2 , drinkname : 'Green', image : t2, price : '$20'},
      {id : 3 , drinkname : 'Sweet', image : t3, price : '$10'},
      {id : 4 , drinkname : 'Mango Flavour', image : t4, price : '$20'},
      {id : 5 , drinkname : 'orange', image : t5, price : '$10'},
      {id : 6 , drinkname : 'chooco', image : t6, price : '$20'},
      {id : 7 , drinkname : 'sucose', image : t7, price : '$10'},
      {id : 8 , drinkname : 'lamora', image : t8, price : '$20'},
    
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