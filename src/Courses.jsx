import React from 'react' 
import Course from './Course';
import Styles from "./styles.module.css"
function Courses({courses,removeCourser}) {

  console.log(courses);        //kontrol ettim props la verileri çekmişmiyim
  
  return (
    <div className={Styles.courseMain} >
      <div>
        <h2>Kurslarım</h2>
        
    </div>
    <div className={Styles.cardDiv} >
      {
        courses.map((course)=>{
          return (
          <Course key={course.id} {...course} removeCourse={removeCourser}  /> //map işleminde course prop olarak işlemlerimizi yapcagımız Course.jsx yolladım
          )
        })
      }
    </div>
    </div>
  )
}

export default Courses

//1)backenddeki dataları bir componente geçmemiz lazım burda yapıcaz(5 tane data burda olmuş olcak)
//2)5 datayı Courde.jsx e geçicez orda basma işlemi yapcaz
//3)data gelme zamanında ise loadingi göstercez(loading.jsx)
//4){...course} böyle yaparsak prop göndermeden direkt Course.jsx de {id,title, vb } değerleri backendden çekebiliriz.
