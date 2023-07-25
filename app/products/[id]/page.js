'use client'

import Image from 'next/image'
import style from '@/app/products/page.module.css'
import { IoIosCart } from 'react-icons/io'
import toast from 'react-hot-toast'

const addCart= async (id)=>{
    const prod= await fetch(`http://localhost:3000/api/products/${id}`);
    const producto= await prod.json()
    toast.success('Added to cart')
    await fetch('http://localhost:3000/api/cart', {
      method:'POST',
      body:JSON.stringify({
        genre: producto.genre,
        name: producto.name,
        price: producto.price,
        image: producto.image,
        category: producto.category
      }),
      headers:{
        'Content-type':'application/json'
      }
    })
  }


const page = async ({params}) => {
  const product= await fetch(`http://localhost:3000/api/products/${params.id}`);
  const producto= await product.json()
  return (
    <div className={style.contInfoProd}>
        <div className={style.photo}>
            <Image src={producto.image} width={450} height={650} alt={producto.name}/>
        </div>
        <div className={style.infoProd}>
            <div style={{height:'30%'}}>
                <h2>{producto.name}</h2>
                <h3>${producto.price}</h3>
            </div>
           <div style={{height:'70%'}}>
            <button className={style.addToCart} onClick={()=> addCart(params.id)} >Add to Cart <IoIosCart style={{marginLeft:'4px'}} /> </button> 
           </div>    
        </div>
    </div>
  )
}

export default page