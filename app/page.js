import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Image
        style={{marginBottom:'3vw'}}
        src='/../public/imgs/modelo.jpg'
        width={520} //320
        height={765} // 485
        alt='modelo'
      />
    </main>
  )
}
