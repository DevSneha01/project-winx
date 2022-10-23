import React from 'react'


const Reviews = () => {
  
  return (
    <div>
      <div className='coontainer'>
        <div className="slidee-container active">
          <div className="slidee">
            <i className="fa fa-quote-right icoon"></i>
            <div className="user">
              <img src="assets/g1.png" alt="" />
              <div className="user-info">
                <h3>sneha</h3>
                <div className="stars">
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
              </div>
            </div>
            <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, quia quaerat veniam, blanditiis autem at pariatur quo dolorum vel assumenda suscipit! Illo quo quasi soluta voluptate excepturi? Et, enim cupiditate?</p>
          </div>
        </div>
        <div className="slidee-container">
          <div className="slidee">
            <i className="fa fa-quote-right icoon"></i>
            <div className="user">
              <img src="assets/g2.png" alt="" />
              <div className="user-info">
                <h3>sneha</h3>
                <div className="stars">
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
              </div>
            </div>
            <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, quia quaerat veniam, blanditiis autem at pariatur quo dolorum vel assumenda suscipit! Illo quo quasi soluta voluptate excepturi? Et, enim cupiditate?</p>
          </div>
        </div>
        <div className="slidee-container">
          <div className="slidee">
            <i className="fa fa-quote-right icoon"></i>
            <div className="user">
              <img src="assets/g1.png" alt="" />
              <div className="user-info">
                <h3>sneha</h3>
                <div className="stars">
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
              </div>
            </div>
            <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, quia quaerat veniam, blanditiis autem at pariatur quo dolorum vel assumenda suscipit! Illo quo quasi soluta voluptate excepturi? Et, enim cupiditate?</p>
          </div>
        </div>
        <div className="slidee-container">
          <div className="slidee">
            <i className="fa fa-quote-right icoon"></i>
            <div className="user">
              <img src="assets/g1.png" alt="" />
              <div className="user-info">
                <h3>sneha</h3>
                <div className="stars">
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
              </div>
            </div>
            <p className='text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, quia quaerat veniam, blanditiis autem at pariatur quo dolorum vel assumenda suscipit! Illo quo quasi soluta voluptate excepturi? Et, enim cupiditate?</p>
          </div>
        </div>
        <div id="next" className='fa fa-arrow-right' onClick={next}></div>
        <div id="prev" className='fa fa-arrow-left' onClick={prev}></div>
      </div>
      <section id='form-details'>
       <form action="">
        <span>leave a message </span>
        <h2>We love to hear from you...</h2>
        <input type="text" placeholder='Your Name' />
        <input type="text" placeholder='Your Email' />
        <input type="text" placeholder='Subject' />
        <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
        <button className='btn'>Submit</button>
       </form>
       <div className="gif">
        <div>
          <img src="assets/gif.gif" alt="" />
        </div>
       </div>
      </section>
 </div>

 )
}
export default Reviews