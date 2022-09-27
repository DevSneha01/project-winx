import React from 'react'

const Footer = () => {
    return (
        <footer class="section-p1">
            <div class="col">
                <h4>Contact</h4>
                <p><strong>Address: </strong>562 Wellington Road, Street 32, San Fancisco</p>
                <p><strong>Phone: </strong>(+91)9876432245</p>
                <p><strong>Hours: </strong>10:00 - 19:00, Mon - Sat</p>
                <div class="follow">
                    <h4>Folow Us</h4>
                    <div class="icons">
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="col">
                <h4>About</h4>
                <a href="#">About us</a>
                <a href="#">Convenience Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Contact Us</a>
            </div>
            <div class="col">
                <h4>My Account</h4>
                <a href="#">Pricing</a>
                <a href="#">Setting</a>
                <a href="#">Orders</a>
                <a href="#">Customer Service</a>
                <a href="#">Help</a>
            </div>
            <div class="col install">
                <h4> Install App</h4>
                <p>From APP Store or Google Play</p>
                <div class="row">
                    <img src="assets/g2.png" alt="" />
                    <img src="assets/g2.webp" alt="" />
                </div>
                <p>Secured Payment Gteways</p>
                <img src="assets/r1.jpg" alt="" />
            </div>
            <div class="copyright">
                <a href="#">ⓒ 2022 Copyright: Winx.com</a>
            </div>
        </footer>
    )
}

export default Footer