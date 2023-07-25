'use client'

import Image from "next/image"
import styles from '@/app/page.module.css'
import { useRouter } from "next/navigation"

const ItemCart = ({image, name, price, id}) => {

    const router = useRouter()

    const deleteItem= async (id)=>{
        await fetch(`http://localhost:3000/api/cart/${id}`, {
            method:'DELETE'
        })

        router.refresh()
    }

  return (
    <div className={styles.itemCart}>
        <Image style={{objectFit:"contain",backgroundColor:'#cecece' , border: '1px solid #cecece', borderRadius:'8px' }} width={200} height={200} objectFit="" alt="Hola" src={image}/>
        <div className={styles.contDatosItem}>
            <h4>{name}</h4>
            <b>${price}</b>
        </div>
        <div className={styles.contClearItem}>
        <button onClick={()=> deleteItem(id)} type="button" class="btn-close" aria-label="Close">X</button>
        </div>
        
    </div>
  )
}

export default ItemCart