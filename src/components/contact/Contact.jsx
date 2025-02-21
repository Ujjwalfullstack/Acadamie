import React from 'react'
import Back from '../common/Back/Back'
import './contact.css'

const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d105585.73401985422!2d77.34616495072115!3d28.609551184485664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1737965344255!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <>
      <Back title='Contact Us'/>
      <section className="contact padding">
        <div className="container shadow flexSB">
            <div className="left row">
                <iframe src={map}></iframe>
            </div>
            <div className="right row">
<h1>Contact Us</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
<div className="items grid2">
    <div className="box">
        <h4>ADDRESS:</h4>
        <p>198 west 21st street, Noida Uttarpradesh UP 201301</p>
    </div>
    <div className="box">
        <h4>Email:</h4>
        <p>help.info@gmail.com</p>
    </div>
    <div className="box">
        <h4>PHONE:</h4>
        <p>+91-763-130-6969</p>
    </div>
</div>
<form action="">
    <div className="flexSB">
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email' />
    </div>
    <input type="email" placeholder='Subject' />
    <textarea cols="30" rows="10">
        Create a message here...
    </textarea>
    <button className='primary-btn'>SEND MESSAGE</button>
</form>
<h3>Follow us here</h3>
<span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact
