import React, { useEffect, useState } from 'react'
import HeaderComponent from '../component/HeaderComponent'
import FooterCompoentn from '../component/FooterCompoentn'
import img1 from '../images/sports-day.jpg'
import img2 from '../images/art-exhibition.jpg'
import img3 from '../images/tech-conference.jpg'
import img4 from '../images/science-fair.jpg'

export default function EventPage() {
const title=['Art Exhibition','Tech Conference 2024','Science Fair']
const description=['A display of the finest art from upcoming artists','An annual tech conference with the latest in technology and innovation.','A showcase of the latest scientific discoveries and projects by students.']
const images_arr=[img2,img3,img4]
const [current_title,setCurrent_title]=useState("Sports Day");
const [current_description,setCurrent_description]=useState("An exciting day of sports activities and competitions.'");
const [image,setImage]=useState(img1)

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function changecontent(){
    var index=randomNumber(0,2);
    const temp_title=title[index]
    const temp_description=description[index]
    const temp_image=images_arr[index]
    setCurrent_title(temp_title)
    setCurrent_description(temp_description)
    setImage(temp_image)
}
useEffect(()=>{
    setInterval(changecontent,3000)
},[]);
  return (
    <div >
        <HeaderComponent/>
      <h1>EventPage</h1>
      <div className='Eventcontainer'>
        <img src={image} />
        <h2>{current_title}</h2>
        <p>{current_description}</p>
      </div>
      <FooterCompoentn/>
    </div>
  )
}
