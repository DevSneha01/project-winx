import React from 'react';

const Home = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <marquee width="100%" height="100px" direction="left">⏰ Great food… on time. 🍖 Grill, Frill, Chill. 🥓 Imagine the difference. 🍔 Imagine a new taste. 🥘 It’s a flavor explosion.</marquee>
                    <div class="carousel-item active">
                        <img src="/assets/img1.png" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 className='buri'>Cooks and Chefs for Home</h5>
                            <p>Served 60,000 people in 16 cities</p>
                            <a href="*">book now</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="assets/img2.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 className='buri bet'>Bartenders for Parties</h5>
                            <p>Up to ₹500 Off</p>
                            <a href="*">book now</a>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="assets/img3.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 className='buri bete'>Caterers for Event</h5>
                            <p>Get 10% Discount</p>
                            <a href="*">book now</a>

                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className="banner">
                <img className='ig' src="assets/b2.webp" alt="" />
                <div className="con">
                    <h5>Extra ₹500 Off</h5>
                    <p>on Special Occasions</p>
                    <a href="#" className='ptn'>View All</a>
                </div>
                <img src="assets/b1.jpg" alt="" />
            </div>
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
  <div className="bor">
    <a href="#">Book Now</a>
</div>
</section>
        </div>
    )
}

export default Home