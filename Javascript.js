        // ----------------- navbar ----------------------------------


var a = document.querySelectorAll(".menu-list a");
for(var i=0, length=a.length; i<length; i++){
  a[i].onclick=function(){
      var b = document.querySelector(".menu-list li.active");
      if(b) b.classList.remove("active");
      this.parentNode.classList.add('active');
  };

}


        const body = document.querySelector("body");
        const navbar = document.querySelector(".navbar");
        const menuBtn = document.querySelector(".menu-btn");
        const cancelBtn = document.querySelector(".cancel-btn");
        menuBtn.onclick = ()=>{
          navbar.classList.add("show");
          menuBtn.classList.add("hide");
          body.classList.add("disabled");
        }
        cancelBtn.onclick = ()=>{
          body.classList.remove("disabled");
          navbar.classList.remove("show");
          menuBtn.classList.remove("hide");
        }
        window.onscroll = ()=>{
          this.scrollY > 41 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
        }
        
        
        window.addEventListener("scroll", function(){
          var nav = this.document.querySelector("nav");
          nav.classList.toggle("sticky", this.window.scrollY > 20);
        })
        
        // -------------- scroll to active class --------------------
            const li=document.querySelectorAll("li");
            const sec=document.querySelectorAll("section");
        
            function activeMenu(){
                let len=sec.length;
                while(--len && window.scrollY + 41< sec[len].offsetTop){}
                li.forEach(ltx => ltx.classList.remove("active"));
                li[len].classList.add("active");
                
                    
                }
                activeMenu();
                window.addEventListener("scroll", activeMenu);
        


// ------------------ Testimonials  all ------------------
function initParadoxWay() {
  "use strict";
 
  if ($(".testimonials-carousel").length > 0) {
      var j2 = new Swiper(".testimonials-carousel .swiper-container", {
          preloadImages: false,
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          grabCursor: true,
          mousewheel: false,
          centeredSlides: true,
          pagination: {
              el: '.tc-pagination',
              clickable: true,
              dynamicBullets: true,
          },
          navigation: {
              nextEl: '.listing-carousel-button-next',
              prevEl: '.listing-carousel-button-prev',
          },
          breakpoints: {
              1024: {
                  slidesPerView: 3,
              },
              
          }
      });
  }
  
// ---------------------------- bubbles -----------------
  
  randomValue=1;
  setInterval(function () {
      var size = randomValue(sArray);
      $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
      $('.individual-bubble').animate({
          'bottom': '100%',
          'opacity': '-=0.7'
      }, 4000, function () {
          $(this).remove()
      });
  }, 350);
  
}

//  --------------- Init All ------------------
$(document).ready(function () {
  initParadoxWay();
});

