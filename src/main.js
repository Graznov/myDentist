import './style.css'
import {RESURSES} from "./resurs.js";

document.querySelector('.my').innerHTML = `

  <div class="container">
  
    <header>
        <div class="content">
        
            <div class="top_menu_head">
                <ul>
                    <li><a href="">about me</a></li>
                    <li><a href="">my works</a></li>
                    <li><a href="">reviews from my patients</a></li>
                    <li><a href="">locatoin</a></li>
                    <li>8 (000) 000 00 00 </li>
                </ul>
              
            </div>
            
<!--            <div class="bootom">-->
                <div class="main_head">
                    <div class="main_head_left">
                    
                    
                        <p>${RESURSES.VALLUE}</p>
                    </div>
                    
                    <div class="main_head_right">
                        <img width="500px" class="main_head_right_img" src="../public/Doctor_Female.png" alt="">
                    </div>
<!--                </div>            -->
            </div>
            

            
            
        </div>       
    </header>
  
  </div>
  
`






