import './style.css'
import {RESURSES} from "./resurs.js";

function animateTextElements() {
    const elements = [
        document.querySelector('.text_one'),
        document.querySelector('.text_two'),
        document.querySelector('.text_three'),
        document.querySelector('.zagolovok'),
        document.querySelector('.text')
    ];

    // Последовательно добавляем класс visible с задержкой
    elements.forEach((element, index) => {
        if (element) {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 300); // Задержка 300мс между элементами
        }
    });
}

// Запускаем анимацию после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    // Небольшая задержка для плавного старта
    setTimeout(animateTextElements, 400);
});

// Или при полной загрузке страницы
window.addEventListener('load', animateTextElements);

document.querySelector('.my').innerHTML = `

  <div class="container">
  
    <header id="selection0">
        <div class="content">
        
                
                <div class="top_menu_head">
                    <ul>
                        <li><a href="#selection1">${RESURSES.HEAD_MENU.OBO_MNE}</a></li>
                        <li><a href="#selection2">${RESURSES.HEAD_MENU.MY_WORK}</a></li>
                        <li><a href="#selection3">${RESURSES.HEAD_MENU.OTZIVI}</a></li>
                        <li><a href="#selection4">${RESURSES.HEAD_MENU.LOCATION}</a></li>
                        <li>${RESURSES.HEAD_MENU.TEL}</li>
                    </ul>
                </div>
                
                <div class="main_head">
                        <div class="main_head_left">
                        
                            <div class="text_one">
                                ${RESURSES.HEADER_CONTAINER.TEXT1}
                            </div>
                            <div class="text_two">
                                ${RESURSES.HEADER_CONTAINER.TEXT2}
                            </div>
                            <div class="text_three">
                                ${RESURSES.HEADER_CONTAINER.TEXT3}
                            </div>
                        
                        </div>
                        
                        <div class="main_head_right">
                            <img width="400px" class="main_head_right_img" src="../public/doctor.pnd.png" alt="">
<!--                            <img width="400px" class="main_head_right_img" src="../public/Doctor_Female.png" alt="">-->
                        </div>
                </div>
            
        </div>     
    </header>
    <main>
        <div class="content">
            <div id="selection1" class="o_moey_rabote">
            
                <div class="o_moey_rabote_Left">
                     <img src="../public/two.png" alt="smiles">
                </div>
                
                <div class="o_moey_rabote_Right">
                
                    <div class="zagolovok">
                        ${RESURSES.O_MOEY_RABOTE.ZAGOLOVOK}
                    </div>
                    <div class="text">
                        <p>${RESURSES.O_MOEY_RABOTE.TEXT}</p>
                    </div>
                    
                </div>
                
            </div>
            
            <div class="o_moey_rabote">

                <div class="o_moey_rabote_Right">
                    <div class="zagolovok_no_animate">${RESURSES.OBO_MNE_1.ZAGOLOVOK}
                        
                    </div>

                    <div class="text_no_animate"><p>${RESURSES.OBO_MNE_1.TEXT}</p>
                        
                    </div>  
                </div>
                <div class="o_moey_rabote_Left">
                     <img src="../public/rab.png" alt="smiles">
                </div>
            </div>
            
            <div class="o_moey_rabote">
                <div class="o_moey_rabote_Left">
                     <img src="../public/rab2.jpg" alt="smiles">
                </div>
                <div class="o_moey_rabote_Right">
                
                    <div class="zagolovok_no_animate">${RESURSES.OBO_MNE_2.ZAGOLOVOK}</div>

                    <div class="text_no_animate"><p>${RESURSES.OBO_MNE_2.TEXT}</p></div>  
                </div>

            </div>
            
                <div class="o_moey_rabote">

                <div class="o_moey_rabote_Right">
                
                    <div class="zagolovok_no_animate">${RESURSES.OBO_MNE_3.ZAGOLOVOK}</div>

                    <div class="text_no_animate"><p>${RESURSES.OBO_MNE_3.TEXT}</p></div>  
                </div>
<!--                <div class="o_moey_rabote_Left">-->
<!--                     <img src="../public/rab2.jpg" alt="smiles">-->
<!--                </div>-->
            </div>
            
<div id="selection2" class="moi_raboti">
    
<!--    <h1 class="about-title">OUR TEAM</h1>-->

<div class="carousel-container">
\t<button class="nav-arrow left">‹</button>
\t<div class="carousel-track">
\t\t<div class="card" data-index="0">
\t\t\t<img src="../public/smile/img1.jpeg" alt="Team Member 1">
\t\t</div>
\t\t<div class="card" data-index="1">
\t\t\t<img src="../public/smile/img2.jpg" alt="Team Member 2">
\t\t</div>
\t\t<div class="card" data-index="2">
\t\t\t<img src="../public/smile/img3.jpeg" alt="Team Member 3">
\t\t</div>
\t\t<div class="card" data-index="3">
\t\t\t<img src="../public/smile/img4.jpeg" alt="Team Member 4">
\t\t</div>
\t\t<div class="card" data-index="4">
\t\t\t<img src="../public/smile/img5.jpg" alt="Team Member 5">
\t\t</div>
\t\t<div class="card" data-index="5">
\t\t\t<img src="../public/smile/img2.jpg" alt="Team Member 6">
\t\t</div>
\t</div>
\t<button class="nav-arrow right">›</button>
</div>

<div class="member-info">
\t<h2 class="member-name">David Kim</h2>
\t<p class="member-role">Founder</p>
</div>

<div class="dots">
\t<div class="dot active" data-index="0"></div>
\t<div class="dot" data-index="1"></div>
\t<div class="dot" data-index="2"></div>
\t<div class="dot" data-index="3"></div>
\t<div class="dot" data-index="4"></div>
\t<div class="dot" data-index="5"></div>
</div>

<div style="display: flex; justify-content: flex-end;width:100%;padding-right:10px;">
\t<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="nidaltahir" data-color="#FFDD00" data-emoji="☕" data-font="Poppins" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff"></script>
</div>
</div>
            
            
            
            
            
            <div id="selection3" class="otzivi_moih_pacientov">
            
                    <div class="zagolovok_no_animate">${RESURSES.OTZIVI.ZAGOLOVOK}</div>
                
                    <div class="cards">

                          <div class="card_">
                              <picture>
                                  <img class="card__picture" src="../public/pacient/pac1.png" alt="art">
                              </picture>
                              <div class="card__inner">
                                  <p class="card__text">${RESURSES.OTZIVI.ONE.TEXT}</p>
                                  <h2 class="card__title">${RESURSES.OTZIVI.ONE.NAME}</h2>
                              </div>
                          </div>
                    
                          <div class="card_">
                              <picture>
                                  <img class="card__picture" src="../public/pacient/pac2.png" alt="art">
                              </picture>
                              <div class="card__inner">
                                  <p class="card__text">${RESURSES.OTZIVI.TWO.TEXT}</p>
                                  <h2 class="card__title">${RESURSES.OTZIVI.TWO.NAME}</h2>
                              </div>
                          </div>
                    
                          <div class="card_">
                              <picture>
                                  <img class="card__picture" src="../public/pacient/pac3.png" alt="art">
                              </picture>
                              <div class="card__inner">
                                  <p class="card__text">${RESURSES.OTZIVI.THREE.TEXT}</p>
                                  <h2 class="card__title">${RESURSES.OTZIVI.THREE.NAME}</h2>
                              </div>
                          </div>
                    
                    </div>
            
            </div>
            
            <div id="selection4" class="poliklinnika">
                <div class="zagolovok_no_animate">${RESURSES.POLIKLINIKA.ZAGOLOVOK}</div>
                <div class="text_no_animate">${RESURSES.POLIKLINIKA.TEXT}</div>
            </div>            
            
            
        </div>
        

    </main>
    
    <footer>
        <div class="content">
<!--            ${RESURSES.VALLUE}-->
            <div class="nav">
                <ul>
                        <li><a href="#selection0">${RESURSES.HEAD_MENU.HOME}</a></li>
                        <li><a href="#selection1">${RESURSES.HEAD_MENU.OBO_MNE}</a></li>
                        <li><a href="#selection2">${RESURSES.HEAD_MENU.MY_WORK}</a></li>
                        <li><a href="#selection3">${RESURSES.HEAD_MENU.OTZIVI}</a></li>
                        <li><a href="#selection4">${RESURSES.HEAD_MENU.LOCATION}</a></li>
                        <li><a href="https://setpol.ru/sergiev-posad-vzrosloe-otdelenie/">${RESURSES.HEAD_MENU.POLIKLINIKA}</a></li>
                        <li>${RESURSES.HEAD_MENU.TEL}</li>
                </ul>
            </div>
            <div class="logo">
                <img src="../public/dentist-2-svgrepo.svg" alt="logo">
            </div>
        </div>
    </footer>
  
  </div>
  
`

//слайдер...
const teamMembers = [
    { name: "Emily Kim", role: "Founder" },
    { name: "Michael Steward", role: "Creative Director" },
    { name: "Emma Rodriguez", role: "Lead Developer" },
    { name: "Julia Gimmel", role: "UX Designer" },
    { name: "Lisa Anderson", role: "Marketing Manager" },
    { name: "James Wilson", role: "Product Manager" }
];

const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");
const memberName = document.querySelector(".member-name");
const memberRole = document.querySelector(".member-role");
const leftArrow = document.querySelector(".nav-arrow.left");
const rightArrow = document.querySelector(".nav-arrow.right");
let currentIndex = 0;
let isAnimating = false;

function updateCarousel(newIndex) {
    if (isAnimating) return;
    isAnimating = true;

    currentIndex = (newIndex + cards.length) % cards.length;

    cards.forEach((card, i) => {
        const offset = (i - currentIndex + cards.length) % cards.length;

        card.classList.remove(
            "center",
            "left-1",
            "left-2",
            "right-1",
            "right-2",
            "hidden"
        );

        if (offset === 0) {
            card.classList.add("center");
        } else if (offset === 1) {
            card.classList.add("right-1");
        } else if (offset === 2) {
            card.classList.add("right-2");
        } else if (offset === cards.length - 1) {
            card.classList.add("left-1");
        } else if (offset === cards.length - 2) {
            card.classList.add("left-2");
        } else {
            card.classList.add("hidden");
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });

    memberName.style.opacity = "0";
    memberRole.style.opacity = "0";

    setTimeout(() => {
        memberName.textContent = teamMembers[currentIndex].name;
        memberRole.textContent = teamMembers[currentIndex].role;
        memberName.style.opacity = "1";
        memberRole.style.opacity = "1";
    }, 300);

    setTimeout(() => {
        isAnimating = false;
    }, 800);
}

leftArrow.addEventListener("click", () => {
    updateCarousel(currentIndex - 1);
});

rightArrow.addEventListener("click", () => {
    updateCarousel(currentIndex + 1);
});

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        updateCarousel(i);
    });
});

cards.forEach((card, i) => {
    card.addEventListener("click", () => {
        updateCarousel(i);
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        updateCarousel(currentIndex - 1);
    } else if (e.key === "ArrowRight") {
        updateCarousel(currentIndex + 1);
    }
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            updateCarousel(currentIndex + 1);
        } else {
            updateCarousel(currentIndex - 1);
        }
    }
}

updateCarousel(0);

//...слайдер






