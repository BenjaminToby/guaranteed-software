
//------------------------------------------------------------------------------------------ Header Content
document.getElementById("main-header").innerHTML = `

<a href="index.html" class="logo-link-block" id="logo-link-wrapper">
			<img src="images-dw/main-logo.svg" alt="" id="main-logo"/>
			<img src="images-dw/main-logo-white.svg" alt="" id="main-logo-white"/>
		</a>

		<nav class="main-nav" id="top-main-navigation">
			<div class="nav-link-wrapper dropdown">
				<a href="#" class="nav-link">
					Services<span style="transform:rotate(90deg);margin-left:10px;">&#10095;</span>
				</a>
				<div class="nav-dropdown-content" id="services-dropdown">
					<a class="nav-dropdown-link" href="#">Custom Solutions</a>
					<a class="nav-dropdown-link" href="#">Mobile Development</a>
					<a class="nav-dropdown-link" href="#">Web Development</a>
					<a class="nav-dropdown-link" href="#">Cloud Services</a>
					<a class="nav-dropdown-link" href="#">Block Chain</a>
					<a class="nav-dropdown-link" href="#">Internet of Things(IoT)</a>
					<a class="nav-dropdown-link" href="m1m2-migration.html">Magento Migration Services</a>
				</div>
			</div>

			<div class="nav-link-wrapper dropdown">
				<a href="#" class="nav-link">
					Technologies<span style="transform:rotate(90deg);margin-left:10px;">&#10095;</span>
				</a>
				<div class="nav-dropdown-content two-columns" id="tech-dropdown">

					<div class="nav-dropdown-column">
						<a class="nav-dropdown-link" href="custom-php-web-development-services.html">PHP</a>
						<a class="nav-dropdown-link" href="#">MySql</a>
						<a class="nav-dropdown-link" href="#">Wordpress</a>
						<a class="nav-dropdown-link" href="#">Magento</a>
						<a class="nav-dropdown-link" href="#">Python</a>
						<a class="nav-dropdown-link" href="#">Java</a>
						<a class="nav-dropdown-link" href="#">Node JS</a>
						<a class="nav-dropdown-link" href="#">Android</a>
						<a class="nav-dropdown-link" href="#">IOS</a>
					</div>

					<div class="nav-dropdown-column">
						<a class="nav-dropdown-link" href="#">React</a>
						<a class="nav-dropdown-link" href="#">Laravel</a>
						<a class="nav-dropdown-link" href="#">HTML5/CSS3</a>
						<a class="nav-dropdown-link" href="#">Angular JS</a>
						<a class="nav-dropdown-link" href="#">Symfony</a>
						<a class="nav-dropdown-link" href="#">Mongo DB</a>
						<a class="nav-dropdown-link" href="#">WooCommerce</a>
						<a class="nav-dropdown-link" href="#">Webflow</a>
					</div>

				</div>
			</div>

			<div class="nav-link-wrapper dropdown">
				<a href="#" class="nav-link">
					About Us<span style="transform:rotate(90deg);margin-left:10px;">&#10095;</span>
				</a>
				<div class="nav-dropdown-content" id="about-dropdown">
					<a class="nav-dropdown-link" href="#">Our Company</a>
					<a class="nav-dropdown-link" href="#">Our Team</a>
					<a class="nav-dropdown-link" href="#">Careeres/Jobs</a>
				</div>
			</div>

			<div class="nav-link-wrapper"><a href="#" class="nav-link">Events</a></div>
			<div class="nav-link-wrapper"><a href="#" class="nav-link">Blog</a></div>
			<spacer class="spacer-20px"></spacer>
			<div class="top-nav-cta-wrapper"><button class="top-nav-cta" onClick="showContactForm()">Contact Us</button></div>
		</nav>

		<div class="hamburger-wrapper" onClick="toggleHamburgerClass()">
			<div class="hamburger-line"></div>
			<div class="hamburger-line"></div>
			<div class="hamburger-line"></div>
		</div>

`;








//------------------------------------------------------------------------------------------ Footer Content
document.getElementById("main-footer").innerHTML = `

    <div class="container1140px footer-content-block" style="margin-bottom:20px;">
			<div class="footer-quater-section">
				<h5 style="font-weight:700;text-align:left;">Contact Us</h5>
				<div class="spacer-20px"></div>
				<a href="tel:1-347-855-5247" class="footer-contact-block">
					<div class="contact-block-icon"><img src="images-dw/phone-call-white.svg" alt="" width="20px"/></div>
					<span style="font-family:helvetica; margin-right:15px;">+1 347 855 5247</span>
				</a>
				<a href="mailto:info@guaranteed.software" class="footer-contact-block">
					<div class="contact-block-icon" style="background:#3655d6;"><img src="images-dw/email-white.svg" alt="" width="20px"/></div>
					<span style="font-family:helvetica;margin-right:15px;">info@guaranteed.software</span>
				</a>
				<a href="#" class="footer-contact-block">
					<div class="contact-block-icon" style="background:#5C95FF;"><img src="images-dw/placeholder-white.svg" alt="" width="20px"/></div>
					<span style="font-family:helvetica; margin-right:15px;padding:10px 0px;color:#777777;font-weight:500;">6616 3ieme Ave Montreal,<br>QC H1T 3E4 Canada</span>
				</a>
			</div>
			<div class="footer-quater-section">
				<h5 style="font-weight:700;text-align:left;">Services</h5>
				<div class="spacer-20px"></div>
				<a href="#" class="footer-link">Custom Solutions</a>
				<a href="#" class="footer-link">Mobile Development</a>
				<a href="#" class="footer-link">Web development</a>
				<a href="#" class="footer-link">Cloud Services</a>
				<a href="#" class="footer-link">BlockChain</a>
				<a href="#" class="footer-link">IoT</a>
				<a href="#" class="footer-link">Magento Migration Services</a>
			</div>
			<div class="footer-quater-section">
				<h5 style="font-weight:700;text-align:left;">Technologies</h5>
				<div class="spacer-20px"></div>
				<div class="footer-multi-column-container">
					<div class="footer-sub-column" style="margin-right:40px;">
						<a href="#" class="footer-link">Angular JS</a>
						<a href="#" class="footer-link">Android</a>
						<a href="#" class="footer-link">HTML5/CSS3</a>
						<a href="#" class="footer-link">IOS</a>
						<a href="#" class="footer-link">Java</a>
						<a href="#" class="footer-link">Laravel</a>
						<a href="#" class="footer-link">MySql</a>
						<a href="#" class="footer-link">Magento</a>
						<a href="#" class="footer-link">Mongo DB</a>
						<a href="#" class="footer-link">Node JS</a>
					</div>

					<div class="footer-sub-column">
						<a href="#" class="footer-link">PHP</a>
						<a href="#" class="footer-link">Python</a>
						<a href="#" class="footer-link">React</a>
						<a href="#" class="footer-link">Symfony</a>
						<a href="#" class="footer-link">Webflow</a>
						<a href="#" class="footer-link">Wordpress</a>
						<a href="#" class="footer-link">Woocomerce</a>
					</div>
				</div>
			</div>
			<div class="footer-quater-section">
				<h5 style="font-weight:700;text-align:left;">Other Links</h5>
				<div class="spacer-20px"></div>
				<a href="#" class="footer-link">About Us</a>
				<a href="#" class="footer-link">Events</a>
				<a href="#" class="footer-link">Blog</a>
				<a href="#" class="footer-link">Jobs/Career</a>
			</div>
		</div>

		<div class="container1140px copyright-section">
			<p class="copyright-text">
				&#169; <span style="font-weight:600;font-size:14px;">2012-<span id="current-year"></span></span> Guaranteed Network. All Rights Reserved
			</p>

			<div style="width:auto;display:flex;align-items:center;margin-bottom:20px;">
				<a href="#" class="footer-social-link"><img src="images-dw/facebook.svg" alt="" width="100%"/></a>
				<a href="#" class="footer-social-link"><img src="images-dw/twitter.svg" alt="" width="100%"/></a>
				<a href="#" class="footer-social-link"><img src="images-dw/linkedin.svg" alt="" width="100%"/></a>
			</div>

			<div style="display:flex;align-items:center;justify-content:center; flex-wrap:wrap;">
				<a href="#" class="footer-link">Terms and Conditions</a>
				<div class="spacer-20px"></div>
				<a href="#" class="footer-link">Privacy Policy</a>
			</div>
		</div>

`;






//------------------------------------------------------------------------------------------ Contact Form Content
document.getElementById("contact-form-popup").innerHTML = `

    <div class="contact-form-wrapper">
        <div class="contact-form-description-section">
            <h2>Contact Us</h2>
            <p style="margin-bottom:0px;">You'll hear back from us very soon. Even if you're sending this message outside of business hours!</p>
            <div class="contact-form-image-section">
                <img src="images-dw/blue-dots.png" alt="" class="contact-form-dots"/>
                <img src="images-dw/paper-plane.svg" alt="" class="contact-form-paper-plane"/>
            </div>
        </div>
        <div class="contact-form-section">
            <form class="contact-form" autocomplete="on">
                <input type="text" placeholder="Enter Your Full Name">
                <input type="email" placeholder="Enter Your Email Address">
                <input type="tel" placeholder="Enter Your Telephone Number">
                <textarea name="message" rows="5" placeholder="Enter Your Message"></textarea>
                <input type="submit" value="Submit" class="main-contact-form-submit-button">
            </form>
        </div>

        <div class="close-form-block" onClick="hideContactForm()"><span style="transform:rotate(45deg);">+</span></div>
    </div>
    <div class="ctf-bg-canceller" onClick="hideContactForm()"></div>

`;




//------------------------------------------------------------------------------------------ Footer CTA

//var footerCTA = (document.getElementById("footer-cta-1") || document.getElementById("footer-cta-2"));

if(document.getElementById("footer-cta-1")) { document.getElementById("footer-cta-1").innerHTML = `

    <div class="container1140px centered-content show-on-scroll">
        <img src="images-dw/paper-plane.svg" alt="" width="60px"/>
        <div class="spacer-20px"></div>
        <span class="mini-sub-header">CONTACT US</span>
        <h2 style="color:inherit;">Get in touch for a discovery call</h2>
        <button class="main-cta-button" onClick="showContactForm()">Start a Project</button>
    </div>

`}









//Hamburget toggle Script....................................................................................
function toggleHamburgerClass() {
  var x = document.getElementById("top-main-navigation");
  var y = document.getElementById("top-nav-controller");

  if (x.className === "main-nav") {
    x.className = "main-nav-display";
  } else {
    x.className = "main-nav";
  }

  if (y.className === "top-nav-controller") {
    y.className = "top-nav-controller-hidden";
  } else {
    y.className = "top-nav-controller";
  }
}



//Main Contact Form ........................................................................................................
var ctf = document.getElementById("contact-form-popup");


function showContactForm() {
    ctf.style.display = "flex";
}

function hideContactForm() {
    ctf.style.display = "none";
}



//Copyright Date .........................................................................................................
const date = new Date();
document.getElementById("current-year").innerHTML = date.getFullYear();









//Animations .........................................................................................................
//var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 500)};
//var elementsToShow = document.querySelectorAll('.show-on-scroll');
//
//function loop() {
//
//    Array.prototype.forEach.call(elementsToShow, function(element){
//      if (isElementInViewport(element)) {
//        element.classList.add('is-visible');
//      } 
//      else {
//        element.classList.remove('is-visible');
//      }
//    });
//
//    scroll(loop);
//}
//
//loop();
//
//function isElementInViewport(el) {
//  // special bonus for those using jQuery
//  if (typeof jQuery === "function" && el instanceof jQuery) {
//    el = el[0];
//  }
//    
//  var rect = el.getBoundingClientRect();
//  return (
//    (rect.top <= 0 && rect.bottom >= 0)
//
//    ||
//
//    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
//
//    ||
//
//    (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
//  );
//}












const sectionTwo = document.querySelectorAll("section div, footer");

var windowBind = {
    root: window.document,
    rootMargin: "0px",
    threshold: 0.2
};

var bodySectionsObserver = new IntersectionObserver(function(entries, bodySectionsObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            
            entry.target.classList.add("is-visible");
            
        } 
        
//        else {
//            
//            entry.target.classList.remove("is-visible");
//        }
    })
}, windowBind);

sectionTwo.forEach(entry => {
    bodySectionsObserver.observe(entry);
});














