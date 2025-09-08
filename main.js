  //sidebar 
function showSidebar(){
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    }
    function hideSidebar(){
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    }

    //<!-- Home images Slider -->
    const slider = document.querySelector('.slider-container');
    const totalNoOfSlides = document.querySelectorAll('.slide').length;
    let current = 0; //index

    setInterval(() => {
        current = (current + 1) % totalNoOfSlides;
        slider.style.transform = `translateX(-${current * 100}%)`;
    }, 4000); // Change slide every 4 seconds
//faq 
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var pannel = this.nextElementSibling;

        if (pannel.style.display === "block") {
            pannel.style.display = "none";
        } 
        else {
            pannel.style.display = "block";
            }
        });
        }

    //testimonials carousel
    const slides = document.querySelector('.carousel-slides');
    const totalSlides = document.querySelectorAll('.testimonial-slide').length;
    let currentIndex = 0;

    function showSlide(index) {
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });

    // Auto-slide every 6 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }, 6000);


    // scroll to top
    const backToTopBtn = document.getElementById('backToTop');

    // Show button when scrolling down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
        } else {
        backToTopBtn.style.display = "none";
        }
    });

    // Smooth scroll to top
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    });