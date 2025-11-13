import './style.css'
import {RESURSES} from "./resurs.js";

function animateTextElements() {
    const elements = [
        document.querySelector('.text_one'),
        document.querySelector('.text_two'),
        document.querySelector('.text_three')
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
  
  </div>
  
`






