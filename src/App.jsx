import {useEffect,useState} from 'react'
import axios from 'axios';
import Courses from './Courses';
import Loading from './Loading';
import Styles from "./styles.module.css"
function App() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true)

  const deleteCourses =(id) => {                                     //verdiğimiz id kafamıza göre veriyoruz
    const afterDelete= courses.filter((course)=>course.id !== id);
    setCourses(afterDelete);
  }

  const fetchCourses=async()=>{        //backednde istek atcağımız yer metot

    setLoading(true) //data çekme işlemi başladığında loading işlemi başlasın

    try {

      const response= await axios.get('http://localhost:3000/courses') //burdan bir cevap döncek bunu bir değişkene atıp useStatele kullancam
      console.log(response);//responsenin içinde datalarımız olmalı(backenddeki veriler)(response.data yazarsak sadece datalar gelir)
      setCourses(response.data) //atama yaparak yeni değerlerini güncelledim(courses a atama yapıldı burda)

      setLoading(false) //backenden dataları çektiğim zaman bitince işlem false ye çekmem lazım loading bitsin

    } catch (error) {
      
      setLoading(false)

    }
   
  
   
  }


  useEffect(() => {

    fetchCourses();
    
  }, [])
  
  return (
    <div>

      {loading ? (
        <Loading/>      
      ) : (
        <>
        {courses.length==0 ? (
          <div className={Styles.courseMain} >
            <div>
        <h2>Kurs Bulunamadı</h2>
        
          </div>
            <button className={Styles.cardDeleteButton} onClick={()=>{fetchCourses()}}>Yenile</button>
          </div>
        ): <Courses courses={courses} removeCourser={deleteCourses}  /> //yüklenme bitince bir sonraki data çekme işlemini yap
      }
       </>
      )
      }

      
    </div>
  )
}

export default App
 //courses={courses} =>burda props olarak yolladım {courses}verilerim,courses= ise istediğim bir props ismi
 //loading işlemi için try catch kullanabiliriz ve usestate ihtiyacımız olcak
// const afterDelete= courses.filter((course)=>course.id !== id); 
//1)burda backenddeki datalarımız  coursesda tutuluyo bunu filtreleyerek id değerimle tıkladığım alanın idsi eşitse sil
//2)afterDelete atadım ki bunu setCourse ile güncelleyeyim
 //<>.....</> arsına yazılan kodlarda kursların hepsi silinmesi halinde buton gelsin butona basınca kurslaar yeniden yüklensin