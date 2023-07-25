'use client'

import styles from '@/app/page.module.css'
import ItemCart from '@/components/ItemCart'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'



const Cart = async () => {

  const router= useRouter() 

  const pagar = async ()=>{
    await fetch("http://localhost:3000/api/cart", {
      method:'DELETE'
    })
    Swal.fire({
      title:'Payment completed',
      icon:'success' 
     }).then(res=>router.push('/'))
     
  }
  
  const data= await fetch('http://localhost:3000/api/cart', {
    cache:'no-store'
  })
  const items = await data.json();  
  
  return (
    <div className={styles.containerCart}>
        <div className={styles.Cart}>
            <h2>Shopping Cart</h2>
            <div className={styles.contItems}>
                {
                    items.products.length > 0 ? items.products.map((item)=>{
                      return <ItemCart id={item._id} image={item.image} name={item.name} price={item.price} />
                  })
                  : <p> There are not products in the cart! </p> 
                }
                
            </div>
        </div>
        <div className={styles.contPay}>
            <div className={styles.pay}>
                <h3>Order Summary</h3>
                <div>
                    <h4>Order total</h4>
                    <b>$
                      {items ? items.price : 0 }</b>
                </div>
                {
                  items.products.length > 0 ? <button onClick={()=> pagar()} className={styles.allowed}>Checkout</button> : <button className={styles.notallowed} style={{cursor:'not-allowed', }} >Checkout</button>
                }
                
            </div>
        </div>
        
    </div>
  )
}

export default Cart