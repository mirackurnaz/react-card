import React from 'react'  
import Styles from "./styles.module.css"

function Course({title,price,id,content,removeCourse}) {
  
  return (
    <div className={Styles.card}>
      <div>
        <h3 className={Styles.cardTitle}>
          {title} 
          </h3>
        
        <h4 className={Styles.cardPrice}>
          {price} TL
          </h4>
      </div>
      <p>
        {content} 
        </p>
     <button className={Styles.cardDeleteButton} onClick={()=>removeCourse(id)}>Delete</button> 
    </div>
  )
}

export default Course

//1)her bir kurs objesi için basma işlemi yapcağımız bölüm burası
//2)onClick={()=>removeCourse(id)} işlemleri app.jsx deki course,setCourse use stateni kullancaz bunun için prop mantığı ile nerden çağırıldıysa oraya prop vere vere geri gittim