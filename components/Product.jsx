'use client'

import toast from 'react-hot-toast'
import React from 'react'
import Image from 'next/image'
import styles from '@/app/page.module.css'
import { BsFillCartPlusFill } from 'react-icons/bs'
import Link from 'next/link'

const Product = async ({tag, source, name, price, idProd, genero, category}) => {

  const addCart= async ()=>{
    toast.success('Added to cart')
    await fetch('http://localhost:3000/api/cart', {
      method:'POST',
      body:JSON.stringify({
        genre: genero,
        name: name,
        price: price,
        image: source,
        category: category
      }),
      headers:{
        'Content-type':'application/json'
      }
    })
  }


  return (
    <div className={styles.product}>
              <Link href={'/products/'+ idProd}>
              <Image width={300} height={450} alt={tag} src={source}/>
              </Link>
              <div style={{display:'flex'}}>
                <div>
                <Link style={{textDecoration:'none', color:'#000'}} href={'/products/'+ idProd}>
                  <p>{name}</p>
                  </Link>  
                  <BsFillCartPlusFill onClick={()=>addCart()} style={{cursor:'pointer'}}/>
                </div>
                <div style={{marginLeft:'10px'}}>
                  
                  <b>${price}</b>
                </div>
                
              </div>
    </div>
  )
}

export default Product