import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className='hh'>About Us</h1>
      <section class="home" id="home">

        <div class="content">
            <h3>About the<span className='spam'> Cuisine</span></h3>
            <p><span>Speak with the taste!</span><br/>A great chef has to be passionate about food and cooking.<br/> They have to genuinely enjoy the whole process of procuring, preparing, cooking and serving food and have to be able to <br/>design menus too. Stamina: An essential quality of a true<br/> chef is stamina.</p>
            <a href="#" class="atn">Order now</a>
        </div>
        <div class="image">
            <img src="assets/a1.jpg" alt=""/>
        </div>
    </section>
    <section class="home" id="home">

        <div class="image">
            <img src="assets/a2.jpg" alt=""/>
        </div>

        <div class="content">
            <h3>About the <span  className='spam'>Refreshment</span></h3>
            <p><span>Always among friends!</span><br/>Engaging Personality. Sure, the bartender is there to mix drinks,<br/> but he's also there to tell jokes, listen to work gripes and provide amateur psychology services. ...</p>
            <a href="#" class="atn">Order now</a>
        </div>
     
    </section>
<section class="home" id="home">

        <div class="content">
            <h3>About the <span className='spam'>Elegance</span></h3>
            <p><span>Pleasantly served!</span><br/>Caterers are adaptable to provide any menu at the best quality. They also perform the service in a timely manner. They are able <br/>to manage a large team to work as one.</p>
            <a href="#" class="atn">Order now</a>
        </div>
    
        <div class="image">
            <img src="assets/a3.jpeg" alt=""/>
        </div>
    
    </section>
<section className='whor'>
<h2 className='hola'>How it Works!!</h2>
  <div className="works">
   
  <div class="icons">
  <img src="assets/w1.png" alt="" />
        <h2>Choose your menu</h2>
    </div>
    <div class="icons">
  <img src="assets/w2.png" alt="" />
        <h2>Select your ingredients</h2>
    </div>
    <div class="icons">
  <img src="assets/w3.png" alt="" />
        <h2>Winx official arrives</h2>
    </div>
    <div class="icons">
  <img src="assets/w4.png" alt="" />
        <h2>Food is prepared</h2>
    </div>
    <div class="icons">
  <img src="assets/w5.png" alt="" />
        <h2>Wraps cleans & leaves</h2>
    </div>
  </div>
</section>
    </div>
  )
}

export default About;