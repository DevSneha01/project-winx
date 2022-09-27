import React from 'react'

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});


const Contact = () => {
  return (
    <div>
      <div class="container">
        <span class="big-circle"></span>
        <img src="img/shape.png" class="square" alt="" />
        <div class="form">
          <div class="contact-info">
            <h3 class="title">Help & Support</h3>
            <p class="text">
              Lets take a step ahead and help you better.
            </p>

            <div class="info">
              <div class="information">
                <i class="fa fa-map-marker icon" aria-hidden="true"></i>
                <p> 562 Wellington Road, Street 32, San Fancisco</p>
              </div>
              <div class="information">
                <i class="fa fa-envelope icon" aria-hidden="true"></i>
                <p>winx@gmail.com</p>
              </div>
              <div class="information">
                <i class="fa fa-phone icon" aria-hidden="true"></i>
                <p>(+91)9876432245</p>
              </div>
            </div>

            <div class="social-media">
              <p>Connect with us :</p>
              <div class="social-icons">
                <a href="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-youtube"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <span class="circle one"></span>
            <span class="circle two"></span>

            <form action="index.html" autocomplete="off">
              <h3 class="title">Contact us</h3>
              <div class="input-container">
                <input type="text" name="name" placeholder='username' class="input" />

              </div>
              <div class="input-container">
                <input type="email" name="email" placeholder='email' class="input" />

              </div>
              <div class="input-container">
                <input type="tel" name="phone" placeholder='phone' class="input" />

              </div>
              <div class="input-container textarea">
                <textarea name="message" placeholder='message' class="input"></textarea>

              </div>
              <input type="submit" value="Send" class="ctn" />
            </form>
          </div>
        </div>
      </div>
      <section className='whor'>
        <div className="works">

          <div class="icons">
            <img src="assets/c3.png" alt="" />
            <h2>Verified Professionals</h2>
          </div>
          <div class="icons">
            <img src="assets/c2.png" alt="" />
            <h2>Assured Service</h2>
          </div>
          <div class="icons">
            <img src="assets/c1.png" alt="" />
            <h2>Amazing Experience</h2>
          </div>

        </div>
      </section>
      <section className='faqq'>
      <h2 className='titles'>FAQs</h2>
      <div className='faq'>
        <div className='question'>
          <h3>Can we cancel our booking</h3>
          <i class="fa fa-level-down" aria-hidden="true"></i>
        </div>
        <div className="answer">
          <p>Yes you can cancel order within 2 hours before arrival and deposited amount will be refunded within 2-3 working days.</p>
        </div>
      </div>
      <div className='faq'>
        <div className='question'>
          <h3>What are your service hours?</h3>
          <i class="fa fa-level-down" aria-hidden="true"></i>
        </div>
        <div className="answer">
          <p>Our service hours vary for different locations and depends on availability of workers.</p>
        </div>
      </div>
      <div className='faq'>
        <div className='question'>
          <h3>Do you support bulk orders?</h3>
          <i class="fa fa-level-down" aria-hidden="true"></i>
        </div>
        <div className="answer">
          <p>In order to provide all customers with a great selection and to ensure you get service on time  , we reserve the right to limit the quantities depending on availability of workers.</p>
        </div>
      </div>
      <div className='faq'>
        <div className='question'>
          <h3>Unable to view the details in my profile?</h3>
          <i class="fa fa-level-down" aria-hidden="true"></i>
        </div>
        <div className="answer">
          <p>Please check if your app is due for an update. If not, please share the details at winx@gmail.com</p>
        </div>
      </div>
      
      <div className='faq'>
        <div className='question'>
          <h3>Can I order in advance?</h3>
          <i class="fa fa-level-down" aria-hidden="true"></i>
        </div>
        <div className="answer">
          <p>We currently do not support this functionality. All our orders are placed and executed on-demand.</p>
        </div>
      </div>
      <div className='faq'>
        <div className='question'>
          <h3>Do I get an invoice for my booking?</h3>
          <i class="fa fa-level-down" aria-hidden="true"></i>
        </div>
        <div className="answer">
          <p>Invoice will be sent in your registered email within 2-3 hours of booking. Any problem with invoice contact winx@gmail.com</p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact