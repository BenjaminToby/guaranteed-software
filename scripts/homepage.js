
//Transparent header controller script......................................................................
const header = document.querySelector("#main-header");
const sectionOne = document.querySelector("#top-nav-controller");

var sectionOneOptions = {
    rootMargin: "0px 0px 0px 0px"
};

var sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            header.className = "top-nav-container-dark-bg";
            document.getElementById("services-dropdown").className = "nav-dropdown-content-dark-bg";
            document.getElementById("tech-dropdown").className = "nav-dropdown-content-dark-bg two-columns";
            document.getElementById("about-dropdown").className = "nav-dropdown-content-dark-bg";
            document.getElementById("logo-link-wrapper").style.width = "330px";
            document.getElementById("main-logo").style.display = "none";
            document.getElementById("main-logo-white").style.display = "block";


            let hamburgerLine = document.querySelectorAll(".hamburger-line");

            for (let i = 0; i < hamburgerLine.length; i++) {
                        hamburgerLine[i].style.backgroundColor = "#ffffff";
            }

            //document.getElementsByClassName("st0").style.fill = "#223a9d";
            //document.getElementsByClassName("st1").style.fill = "#0070ba";
        } else {
            header.className = "top-nav-container";
            document.getElementById("services-dropdown").className = "nav-dropdown-content";
            document.getElementById("tech-dropdown").className = "nav-dropdown-content two-columns";
            document.getElementById("about-dropdown").className = "nav-dropdown-content";
            document.getElementById("logo-link-wrapper").style.width = "250px";
            document.getElementById("main-logo").style.display = "block";
            document.getElementById("main-logo-white").style.display = "none";

            let hamburgerLine = document.querySelectorAll(".hamburger-line");

            for (let i = 0; i < hamburgerLine.length; i++) {
                        hamburgerLine[i].style.backgroundColor = "#27304d";
            }
            //document.getElementsByClassName("st0").style.fill = "#ffffff";
            //document.getElementsByClassName("st1").style.fill = "#ffffff";
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);




//Load Functions .......................................................................................
window.addEventListener("load", () => {

    document.getElementById("preloader-container").className = "preloader-container-exit";
    
    setTimeout(function() {
        document.getElementById("hero-container").classList.add("is-visible");
    }, 1000);

});






//Hero Icons script .......................................................................................
var t;

function phpHover() {
    
    clearTimeout(t);
    
    document.getElementById("homepage-hero-title-text").innerHTML = "PHP development";

    document.getElementById("homepage-hero-subtext").innerHTML = "PHP is one of the most popular development languages for web applications and is one of the core technologies we utilize at Guaranteed Software. Furthermore, we support development in legacy 5.x code bases, popular 7.x versions, as well as modern 8.x endeavors.";

    var techicons = document.querySelectorAll(".hero-tech-icon");

    for (var i = 0; i < techicons.length; i++) {
                techicons[i].style.opacity = 0.4;
    }

    document.getElementById("php-hero-icon").style.opacity = "1";

    /* document.querySelectorAll(".hero-tech-icon").style.opacity = 0.4; */

}

function laravelHover() {
    
    clearTimeout(t);
    
    document.getElementById("homepage-hero-title-text").innerHTML = "Laravel development";

    document.getElementById("homepage-hero-subtext").innerHTML = "Laravel is fairly new but already a widely popular PHP framework used to create dynamic and high performing web applications. Laravel has a well-versed set of tools that allow us to simplify the process of development and improve the speed and quality of the designed program.";

    let techicons = document.querySelectorAll(".hero-tech-icon");

    for (let i = 0; i < techicons.length; i++) {
                techicons[i].style.opacity = 0.4;
    }

    document.getElementById("laravel-hero-icon").style.opacity = "1";

    /* document.querySelectorAll(".hero-tech-icon").style.opacity = 0.4; */

    }

function magentoHover() {
    clearTimeout(t);
    document.getElementById("homepage-hero-title-text").innerHTML = "Magento development";

    document.getElementById("homepage-hero-subtext").innerHTML = "Magento is one of the market leaders of the e-commerce platform segment, having been acquired by Adobe in June 2018 for 1.6bn dollars. It’s increased popularity is due to several reasons such as a free plan which is suitable for most e-commerce stores, a high degree of flexibility and a long market presence.";

    let techicons = document.querySelectorAll(".hero-tech-icon");

    for (let i = 0; i < techicons.length; i++) {
                techicons[i].style.opacity = 0.4;
    }

    document.getElementById("magento-hero-icon").style.opacity = "1";

    /* document.querySelectorAll(".hero-tech-icon").style.opacity = 0.4; */

    }

function androidHover() {
    clearTimeout(t);
    document.getElementById("homepage-hero-title-text").innerHTML = "Android development";

    document.getElementById("homepage-hero-subtext").innerHTML = "Android is definitely one of the most popular operating systems in the world of mobile technology as it has been around for over ten years. It’s an open-source mobile operating system running on almost 80% of smartphones worldwide.";

    let techicons = document.querySelectorAll(".hero-tech-icon");

    for (let i = 0; i < techicons.length; i++) {
                techicons[i].style.opacity = 0.4;
    }

    document.getElementById("android-hero-icon").style.opacity = "1";

    /* document.querySelectorAll(".hero-tech-icon").style.opacity = 0.4; */

    }

function css3Hover() {
    clearTimeout(t);
    document.getElementById("homepage-hero-title-text").innerHTML = "CSS3 development";

    document.getElementById("homepage-hero-subtext").innerHTML = "HTML5 and CSS3 are the cornerstones of front-end development. CSS stands for Cascading Style Sheets, and its main function is to define the layout of the content made with HTML. Basically, it helps style the web page.";

    let techicons = document.querySelectorAll(".hero-tech-icon");

    for (let i = 0; i < techicons.length; i++) {
                techicons[i].style.opacity = 0.4;
    }

    document.getElementById("css3-hero-icon").style.opacity = "1";

    /* document.querySelectorAll(".hero-tech-icon").style.opacity = 0.4; */

    }

function angularHover() {
    clearTimeout(t);
    document.getElementById("homepage-hero-title-text").innerHTML = "Angular development";

    document.getElementById("homepage-hero-subtext").innerHTML = "Angular.JS is one of the most powerful open-source front-end development frameworks which allows us to create powerful web portals and applications with outstanding UI.";

    let techicons = document.querySelectorAll(".hero-tech-icon");

    for (let i = 0; i < techicons.length; i++) {
                techicons[i].style.opacity = 0.4;
    }

    document.getElementById("angular-hero-icon").style.opacity = "1";

    }

function iosHover() {
    clearTimeout(t);
    document.getElementById("homepage-hero-title-text").innerHTML = "IOS development";

    document.getElementById("homepage-hero-subtext").innerHTML = "iOS is a particularly popular operating system running across Apple mobile devices with a broad audience all over the world. iOS is designed to be a unique and highly secure system that provides multiple benefits to its users.";

    let techicons = document.querySelectorAll(".hero-tech-icon");

    for (let i = 0; i < techicons.length; i++) {
                techicons[i].style.opacity = 0.4;
    }

    document.getElementById("ios-hero-icon").style.opacity = "1";

    }

function symfonyHover() {
    clearTimeout(t);
    document.getElementById("homepage-hero-title-text").innerHTML = "Symfony development";

    document.getElementById("homepage-hero-subtext").innerHTML = "Symfony is one of the most popular and widely used PHP frameworks. It comprises a set of useful components for the development of websites, portals and web applications.";

    let techicons = document.querySelectorAll(".hero-tech-icon");

    for (let i = 0; i < techicons.length; i++) {
                techicons[i].style.opacity = 0.4;
    }

    document.getElementById("symfony-hero-icon").style.opacity = "1";

    }

function wordpressHover() {
    clearTimeout(t);
    document.getElementById("homepage-hero-title-text").innerHTML = "Wordpress development";

    document.getElementById("homepage-hero-subtext").innerHTML = "WordPress is by far the most popular platform for website development. Its popularity is mainly due to the high degree of flexibility it offers to developers and to the stellar user experience it provides to non-technical people";

    let techicons = document.querySelectorAll(".hero-tech-icon");

    for (let i = 0; i < techicons.length; i++) {
                techicons[i].style.opacity = 0.4;
    }

    document.getElementById("wordpress-hero-icon").style.opacity = "1";

    }

function wooHover() {
    clearTimeout(t);
    document.getElementById("homepage-hero-title-text").innerHTML = "Woocommerce development";

    document.getElementById("homepage-hero-subtext").innerHTML = "WooCommerce is a free Wordpress plugin designed for selling products and services. Today, WooCommerce is one of the most popular Wordpress plugins and the most used e-commerce tool across websites with about 42% of online stores powered by it.";

    let techicons = document.querySelectorAll(".hero-tech-icon");

    for (let i = 0; i < techicons.length; i++) {
                techicons[i].style.opacity = 0.4;
    }

    document.getElementById("woo-hero-icon").style.opacity = "1";

    }

function mysqlHover() {
    clearTimeout(t);
    document.getElementById("homepage-hero-title-text").innerHTML = "MySQL development";

    document.getElementById("homepage-hero-subtext").innerHTML = "PHP is one of the most popular development languages for web applications and is one of the core technologies we utilize at Guaranteed Software. Furthermore, we support development in legacy 5.x code bases, popular 7.x versions, as well as modern 8.x endeavors.";

    let techicons = document.querySelectorAll(".hero-tech-icon");

    for (let i = 0; i < techicons.length; i++) {
                techicons[i].style.opacity = 0.4;
    }

    document.getElementById("mysql-hero-icon").style.opacity = "1";

    }

function html5Hover() {
    clearTimeout(t);
    document.getElementById("homepage-hero-title-text").innerHTML = "HTML5 development";

    document.getElementById("homepage-hero-subtext").innerHTML = "HTML5 and CSS3 are the cornerstones of front-end development. HTML is a markup language used to structure content on the web pages and, in one way or another, is used by every webpage in existence.";

    let techicons = document.querySelectorAll(".hero-tech-icon");

    for (let i = 0; i < techicons.length; i++) {
                techicons[i].style.opacity = 0.4;
    }

    document.getElementById("html5-hero-icon").style.opacity = "1";

    }

function pythonHover() {
    clearTimeout(t);
    document.getElementById("homepage-hero-title-text").innerHTML = "Python development";

    document.getElementById("homepage-hero-subtext").innerHTML = "Python is a highly flexible programming language designed for multiple purposes. It can be used to create web or mobile apps, CMS or even video games. Being a practical solution on any scale, Python is widely popular and it’s used to power all sorts of applications such as Instagram for example.";

    let techicons = document.querySelectorAll(".hero-tech-icon");

    for (let i = 0; i < techicons.length; i++) {
                techicons[i].style.opacity = 0.4;
    }

    document.getElementById("python-hero-icon").style.opacity = "1";

    }

function javaHover() {
    clearTimeout(t);
    document.getElementById("homepage-hero-title-text").innerHTML = "Java development";

    document.getElementById("homepage-hero-subtext").innerHTML = "Java is one of the most popular programming languages widely used for creating web and mobile applications, web portals, customized and enterprise software, games, etc. The immense advantage of Java is that it's platform-independent.";

    let techicons = document.querySelectorAll(".hero-tech-icon");

    for (let i = 0; i < techicons.length; i++) {
                techicons[i].style.opacity = 0.4;
    }

    document.getElementById("java-hero-icon").style.opacity = "1";

    }

function nodejsHover() {
    clearTimeout(t);
    document.getElementById("homepage-hero-title-text").innerHTML = "NodeJS development";

    document.getElementById("homepage-hero-subtext").innerHTML = "Node.js is a run-time cross-platform environment designed to create applications using Javascript on the server-side. While Javascript is a front-end development language that operates on the client side (basically, in your browser), Node.js allows to implement it on the back-end of your product.";

    let techicons = document.querySelectorAll(".hero-tech-icon");

    for (let i = 0; i < techicons.length; i++) {
                techicons[i].style.opacity = 0.4;
    }

    document.getElementById("nodejs-hero-icon").style.opacity = "1";

    }

function mongodbHover() {
    clearTimeout(t);
    document.getElementById("homepage-hero-title-text").innerHTML = "MongoDB development";

    document.getElementById("homepage-hero-subtext").innerHTML = "MongoDB is an open-source object-oriented NoSQL database. It is simple, scalable and provides high performance as well as it is easy to implement and use.";

    let techicons = document.querySelectorAll(".hero-tech-icon");

    for (let i = 0; i < techicons.length; i++) {
                techicons[i].style.opacity = 0.4;
    }

    document.getElementById("mongodb-hero-icon").style.opacity = "1";

    }

function webflowHover() {
    clearTimeout(t);
    document.getElementById("homepage-hero-title-text").innerHTML = "Webflow development";

    document.getElementById("homepage-hero-subtext").innerHTML = "WebFlow is a highly efficient and advanced web development tool. The main three features of WebFlow include the designer, CMS, and hosting platform.";

    let techicons = document.querySelectorAll(".hero-tech-icon");

    for (let i = 0; i < techicons.length; i++) {
                techicons[i].style.opacity = 0.4;
    }

    document.getElementById("webflow-hero-icon").style.opacity = "1";


    }

function reactHover() {
    clearTimeout(t);
    document.getElementById("homepage-hero-title-text").innerHTML = "React development";

    document.getElementById("homepage-hero-subtext").innerHTML = "React is a popular front-end development tool that was originally created for Facebook. It is a JavaScript library designed to simplify the development process and improve the user experience.";

    let techicons = document.querySelectorAll(".hero-tech-icon");

    for (let i = 0; i < techicons.length; i++) {
                techicons[i].style.opacity = 0.4;
    }

    document.getElementById("react-hero-icon").style.opacity = "1";

    }


function heroTechIconsMouseout() {
    
    t = setTimeout(function() {
        
        document.getElementById("homepage-hero-title-text").innerHTML = "Custom Software Development at World Class Standards";

        document.getElementById("homepage-hero-subtext").innerHTML = "Custom Solutions  |  Web Development  |  Mobile Development  |  Cloud Solutions  |  Blockchain  |  IOT";

        let techicons = document.querySelectorAll(".hero-tech-icon");

        for (let i = 0; i < techicons.length; i++) {
            techicons[i].style.opacity = 1;
        }
        
    }, 500);
    
}



//Client Slideshow .........................................................................................................
var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("client-slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "flex";
}

showDivs(slideIndex);





//Client Slideshow Mobile ...............................................................................................
var slideIndexMobile = 1;

function plusDivsMobile(n) {
  showDivsMobile(slideIndexMobile += n);
}

function showDivsMobile(n) {
  var i;
  var x = document.getElementsByClassName("client-slide-mobile");
  if (n > x.length) {slideIndexMobile = 1}
  if (n < 1) {slideIndexMobile = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexMobile-1].style.display = "flex";
}

showDivsMobile(slideIndexMobile);



//Portfolio Slider .......................................................................................................
var PortfolioSlideIndex = 1;

function PorfolioPlusDivs(n) {
    showPortfolioDivs(PortfolioSlideIndex += n);
} 

function showPortfolioDivs(n) {
    //var p1;
    //var p2 = document.getElementsByClassName("portfolio-slide");
    //if (n > p2.length) {PortfolioSlideIndex = 1}
    //if (n < 1) {PortfolioSlideIndex = p2.length}
    //for (p1 = 0; p1 < p2.length; p1++) {
    //	p2[p1].style.display = "none";
    //}
    //p2[PortfolioSlideIndex-1].style.display = "flex";

    var i;
    var x = document.getElementsByClassName("portfolio-slide");
    if (n > x.length) {PortfolioSlideIndex = 1}
    if (n < 1) {PortfolioSlideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[PortfolioSlideIndex-1].style.display = "flex";
}

showPortfolioDivs(PortfolioSlideIndex);




//Testimonials Slider .......................................................................................................
var TestimonialSlideIndex = 1;

function TestimonialPlusDivs(n) {
    showTestimonialDivs(TestimonialSlideIndex += n);
} 

function showTestimonialDivs(n) {

    var i;
    var x = document.getElementsByClassName("testimonials-slide");
    if (n > x.length) {TestimonialSlideIndex = 1}
    if (n < 1) {TestimonialSlideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[TestimonialSlideIndex-1].style.display = "flex";
}

showTestimonialDivs(TestimonialSlideIndex);







//Services Tabs...........................................................................................................
function servicesTabs(evt, serviceName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("wwd-content-block");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("wwd-tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(serviceName).style.display = "flex";
  evt.currentTarget.className += " active";

}

document.getElementById("wwd-default-tab-link").click();











