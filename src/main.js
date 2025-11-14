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

// //слайдер...
// const slides = document.querySelector('.slides');
// const slide = document.querySelectorAll('.slide');
// let index = 0;
//
// document.querySelector('.next').addEventListener('click', () => {
//     index = (index + 1) % slide.length;
//     slides.style.transform = `translateX(-${index * 100}%)`;
// });
//
// document.querySelector('.prev').addEventListener('click', () => {
//     index = (index - 1 + slide.length) % slide.length;
//     slides.style.transform = `translateX(-${index * 100}%)`;
// });
// //...слайдер

document.querySelector('.my').innerHTML = `

  <div class="container">
  
    <header>
        <div class="content">
        
                
                <div class="top_menu_head">
                    <ul>
                        <li><a href="">${RESURSES.HEAD_MENU.OBO_MNE}</a></li>
                        <li><a href="">${RESURSES.HEAD_MENU.MY_WORK}</a></li>
                        <li><a href="">${RESURSES.HEAD_MENU.OTZIVI}</a></li>
                        <li><a href="">${RESURSES.HEAD_MENU.LOCATION}</a></li>
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
                            <img width="500px" class="main_head_right_img" src="../public/Doctor_Female.png" alt="">
                        </div>
                </div>
            
        </div>     
    </header>
    <main>
        <div class="content">
            <div class="o_moey_rabote">
            
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
            
<div class="moi_raboti">
    
    <div class="zagolovok">${RESURSES.SLIDER_TEXT}</div>

    <div class="slider">
      <div class="slides">
                <img src="../public/smile/img1.jpeg" class="slide" alt="">
                <img src="../public/smile/img2.jpeg" class="slide" alt="">
                <img src="../public/smile/img3.jpeg" class="slide" alt="">
                <img src="../public/smile/img4.jpeg" class="slide" alt="">
                <img src="../public/smile/img5.jpg" class="slide" alt="">
      </div>
    
      <button class="prev">‹</button>
      <button class="next">›</button>
      
    </div>
    
    <div class="slider-dots"></div>
</div>
            
            
            
<!--            <div class="o_moey_rabote">-->
<!--                <div class="o_moey_rabote_Right">-->

<!--                    <div class="zagolovok">${RESURSES.O_MOEY_RABOTE.ZAGOLOVOK}-->
                        
<!--                    </div>-->
<!--                    <div class="text"><p>${RESURSES.O_MOEY_RABOTE.TEXT}</p>-->
                        
<!--                    </div>  -->
<!--                </div>-->
<!--                <div class="o_moey_rabote_Left">-->
<!--                     <img src="../public/two.png" alt="smiles">-->
<!--                </div>-->
            </div>
        </div>
    </main>
  
  </div>
  
`

//слайдер...
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % slide.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + slide.length) % slide.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
});
//...слайдер






