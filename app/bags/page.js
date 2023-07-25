import Image from 'next/image'
import React from 'react'
import Product from '@/components/Product'
import styles from '@/app/page.module.css'
import Filters from '@/components/Filters'
import { cache } from 'react'

const Bags = async () => {

  const data= await fetch('http://localhost:3000/api/products/bags', {
    next:{
      revalidate:120
    }
  })
  const productos= await data.json();
   
  return (
    <div className={styles.mainJew}>
        <div className={styles.contfilters}>
          <Filters />
        </div>
        <section className={styles.sectionJew}>
            {
                productos.map((product)=>{
                    return <Product category={product.category} genero={product.genre} idProd={product._id} name={product.name} price={product.price} source={product.image} key={product._id} tag={product.name}/> 
                })
            }
            
        </section>
    </div>
  )
}

export default Bags