document.addEventListener("DOMContentLoaded", function () {
  
    let menuIcon = document.querySelector("#menu-icon") ;
    let navbar = document.querySelector(".navbar");
  
    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x") ;
      navbar. classList . toggle("active");
    };
  
  // --------------------------------------------------------------------------------
  
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");
  
    window. onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
  
        if(top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove("active");
            document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
          });
        };
      });
  
  // --------------------------------------------------------------------------------
  
      let header = document.querySelector(".header");
      header.classList.toggle("sticky", window.scrollY > 0);
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    };
  
  // --------------------------------------------------------------------------------
  
    let darkModeIcon = document.querySelector("#darkMode-icon") ;
    
    darkModeIcon.onclick = () => {
      darkModeIcon.classList.toggle("bx-sun");
      document.body.classList.toggle("dark-mode");
    };
  
  // --------------------------------------------------------------------------------
  
    const typed = new Typed(".multiple-text", {
      strings: ["Web Developer", "DevOps Practitioner", "Competitive Coder", "Data Engineer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true
    });
  
  // --------------------------------------------------------------------------------
  
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      grabCursor: true,
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
  // --------------------------------------------------------------------------------
  
    ScrollReveal({
      reset: true,
      distance: "80px",
      duration: 1500,
      delay: 120
    });
  
    ScrollReveal().reveal(".home-content, .heading", {origin: "top"});
    ScrollReveal().reveal(".home-img img, .exposure-container, .project-box, .contact form", {origin: "bottom"});
    ScrollReveal().reveal(".home-content h1, .about-img img", {origin: "left"});
    ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {origin: "right"});
  
  // --------------------------------------------------------------------------------
  
    const line = document.querySelector(".education-innerline");
  
    let i = 0;
    let i2 = 1;
    let target1 = document.querySelector(".education ul");
    let target2 = document.querySelectorAll(".education ul li");
  
    const education_events = document.querySelectorAll("ul li");
  
  // --------------------------------------------------------------------------------
  
    function showTime(e) {
      e.setAttribute("done", "true");
      e.querySelector(".education-point").style.background = "var(--bg-color)";
      e.querySelector(".education-point").style.border = "3.5px solid var(--main-color)";
      e.querySelector(".date").style.opacity = "100%";
      e.querySelector(".education-box").style.opacity = "100%";
      e.querySelector(".education-box").style.transform = "translateY(0px)";
      e.style.border = "3px solid var(--main-color)";
      e.querySelector("div").style.visibility = "visible";
    }
  
  // --------------------------------------------------------------------------------
  
    function hideTime(e) {
      e.removeAttribute("done");
      e.querySelector(".education-point").style.background = "var(--bg-color)";
      e.querySelector(".education-point").style.border = "3.5px solid var(--text-color)";
      e.querySelector(".date").style.opacity = "0%";
      e.querySelector(".education-box").style.opacity = "0%";
      e.querySelector(".education-box").style.transform = "translateY(-10px)";
      e.style.border = "none";
      e.querySelector("div").style.visibility = "hidden";
    }
  
  // --------------------------------------------------------------------------------
  
    function slowLoop() {
      setTimeout(function () {
        showTime(education_events[i]);
        educationProgress(i + 1);
        i++;
        if (i < education_events.length) {
          slowLoop();
        }
      }, 500);
    }
  
  // --------------------------------------------------------------------------------
  
    function educationProgress(value) {
      let progress = `${(value / education_events.length) * 100}%`;
      if (window.matchMedia("(max-width: 768px)").matches) {
        line.style.height = progress;
        line.style.width = "4px";
      }
      else {
        line.style.width = progress;
        line.style.height = "4px";
      }
    }
  
  // --------------------------------------------------------------------------------
  
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.1) {
            if (window.matchMedia("(max-width: 768px)").matches) {
              showTime(entry.target);
              educationProgress(i2);
              i2++;
            }
            else {
              slowLoop();
            }
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
  
    if (window.matchMedia("(max-width: 768px)").matches) {
      target2.forEach((t) => {
        observer.observe(t);
      });
    }
    else {
      observer.observe(target1);
    }
  
  // --------------------------------------------------------------------------------
  
    education_events.forEach((li, index) => {
      li.addEventListener("click", () => {
        if (li.getAttribute("done")) {
          educationProgress(index);
          education_events.forEach((ev, idx) => {
            if (idx >= index) {
              hideTime(ev);
            }
          });
        }
        else {
          educationProgress(index + 1);
          education_events.forEach((ev, idx) => {
            if (idx <= index) {
              showTime(ev);
            }
          });
        }
      });
    });
  
  // --------------------------------------------------------------------------------
  
    var doit;
    window.addEventListener("resize", () => {
      clearTimeout(doit);
      doit = setTimeout(resizeEnd, 1200);
    });
  
    function resizeEnd() {
      i = 0;
      slowLoop();
    }
  
  // --------------------------------------------------------------------------------
  
    const form = document.querySelector("form");
  
    const fullName = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const mess = document.getElementById("message");
  
    const bodyMessage = `Full Name: ${fullName.value}<br> Email ID: ${email.value}<br> Phone No: ${phone.value}<br> Message: ${mess.value}`;
  
  // --------------------------------------------------------------------------------
  
    function sendEmail() {
      Email.send({
        SecureToken: "e4039298-9079-4bef-a55a-247f267154fa",
        To: "pubgsam13@gmail.com",
        From: "pubgsam13@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
      }).then(
        message => {
          if(message == "OK") {
            Swal.fire({
              position: "top-end",
              title: "Success",
              text: "Message sent successfully",
              icon: "success"
            });
          }
          else {
            Swal.fire({
              position: "top-end",
              title: "Oops...",
              text: "Something went wrong!",
              icon: "error"
            });
          }
        }
      );
    }
  
  // --------------------------------------------------------------------------------
  
    function checkInputs() {
      const items = document.querySelectorAll(".item");
  
      for (const item of items) {
  
        if (item.id === "phone") {
          continue;
        }
  
        if(item.value == "") {
          item.classList.add("error");
          item.parentElement.classList.add("error");
        }
  
        if(items[1].value != ""){
          checkEmail();
        }
  
        items[1].addEventListener("keyup", () => {
          checkEmail();
        })
  
        if(items[2].value != ""){
          checkPhone();
        }
  
        items[2].addEventListener("keyup", () => {
          checkPhone();
        })
        
        item.addEventListener("keyup", () => {
          if(item.value != "") {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
          }
          else {
            item.classList.add("error");
            item.parentElement.classList.add("error");
          }
        })
      }
    }
  
  // --------------------------------------------------------------------------------
  
    function checkEmail() {
      const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
      const errorTxtEmail = document.querySelector(".error-txt.email");
  
      if(!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");
  
        if(email.value != "") {
          errorTxtEmail.innerText = "Enter a valid Email Address";
        }
        else {
          errorTxtEmail.innerText = "Email Address can't be blank";
        }
      }
      else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
      }
    }
  
  // --------------------------------------------------------------------------------
  
    function checkPhone() {
      const phoneRegex = /^(?:\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*)?$/;
      const errorTxtPhone = document.querySelector(".phone");
  
      if(!phone.value.match(phoneRegex)) {
        phone.classList.add("error");
        phone.parentElement.classList.add("error");
  
        if(phone.value != "") {
          errorTxtPhone.innerText = "Enter a valid Phone Number";
        }
      }
      else {
        phone.classList.remove("error");
        phone.parentElement.classList.remove("error");
      }
    }
  
  // --------------------------------------------------------------------------------
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      checkInputs();
  
      if(!fullName.classList.contains("error") &&
      !email.classList.contains("error") &&
      !phone.classList.contains("error") &&
      !subject.classList.contains("error") &&
      !mess.classList.contains("error")) {
        sendEmail();
        form.reset();
        return false;
      }
    })
  });