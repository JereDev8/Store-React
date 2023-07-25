'use client'

import styles from '@/app/page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Filters = ({genre}) => {
    const router= useRouter()
    let categorias; 
    if(genre == 'male'){
        categorias=[{
            name:'Abrigos',
            href:'/mens/coats'
          },
          {
            name:'Remeras',
            href:'/mens/t-shirts'
          },
          {
            name:'Camisas',
            href:'/mens/shirts'
          }
        ]
    }
    else if(genre == 'female') {
        categorias =[{
            name:'Abrigos',
            href:'/womens/coats'
          },
          {
            name:'Remeras',
            href:'/womens/t-shirts'
          },
          {
            name:'Bolsos',
            href:'/womens/bags'
          }
        ]
    }

      

  return (
    <div className={styles.filters}>
        {
            categorias ? categorias.map((categ)=>{
                return <a onClick={()=> router.push(`${categ.href}`)}>{categ.name}</a> 
            }) : <p>There're not categories in this section</p>
        } 
        
    </div>
  )
}

export default Filters