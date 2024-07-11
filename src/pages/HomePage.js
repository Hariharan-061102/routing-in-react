import React from 'react'
import HeaderComponent from '../component/HeaderComponent'
import FooterCompoentn from '../component/FooterCompoentn'
export default function HomePage() {
  return (
    <div>
        <HeaderComponent/>
        <div className='Homecontainer'>
            <h1>Welcome to Saveetha Engineering College</h1>
            <p>Your future starts here. Learn more about our programs and events.</p>
        </div>
        <FooterCompoentn/>
    </div>
  )
}
