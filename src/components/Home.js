import React from 'react'
import '../Home.css'


function Home() {
  return (
    <section id="home">
     <h1 className="homeHeader">
     <span className='first-half' >
        <span>CREATIVE</span> <br />
        <span>DEVELOPER</span> <br />
        <span>BASED IN INDIANAPOLIS</span><br/> 
      </span> 
      <span className='second-half' >
        <span>CRAFTING DIGITAL</span> <br />
        <span>DREAMS INTO</span> <br />
        <span>REALITY</span> <br />
      </span> 
     </h1> 
    </section>
  )
}

// function Home() {
//   return (
//     <section id="home">
//      <h1 className="homeHeader">
//         <span className="first-half">CREATIVE DEVELOPER BASED IN INDIANAPOLIS </span>
//         <span className="second-half">CRAFTING DIGITAL DREAMS INTO REALITY </span>
//      </h1> 
//     </section>
//   )
// }

export default Home


