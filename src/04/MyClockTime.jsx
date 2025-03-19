import styles from './MyClockTime.module.css'
import { useState ,useEffect } from 'react'
export default function MyClockTime() {

    const [t, setT]=useState(new Date());

    useEffect(()=>{
        const tm=setInterval(()=>{
            setT(new Date())
        },1000)
        
        return ()=>{
        clearInterval(tm);
    }
    },[]);


    

  return (
    <div className={styles.c3}>
        현재시각: {t.toLocaleTimeString()}
      
    </div>
  )
}
