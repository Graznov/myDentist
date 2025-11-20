(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const e={HEAD_MENU:{HOME:"Home",OBO_MNE:"О моей работе",MY_WORK:"Мои работы",OTZIVI:"отзывы моих пациентов",LOCATION:"где я работаю",POLIKLINIKA:"Семейная поликлиника",TEL:"8 (000) 000 00 00"},HEADER_CONTAINER:{TEXT1:"Улыбайтесь чаще! Мы позаботимся о красоте вашей улыбки",TEXT2:"Ювелирная работа для вашей безупречной улыбки",TEXT3:"Сияйте уверенно — улыбайтесь без границ"},O_MOEY_RABOTE:{ZAGOLOVOK:"Реставрация улыбки —",TEXT:"<span>это косметическая стоматологическая</span> процедура, направленная на восстановление естественной формы, цвета и структуры зубов для создания эстетически привлекательной улыбки. Она включает в себя художественное восстановление при помощи композитных материалов (прямой метод) или установку керамических виниров или коронок (непрямой метод) для исправления таких дефектов, как сколы, трещины, диастемы, неровный цвет или форма зубов. Процедура может быть щадящей, минимально затрагивая здоровые ткани зуба, и позволяет достичь естественного вида. "},OBO_MNE_1:{ZAGOLOVOK:"Меня часто называют художником",TEXT:"<span>Только мои кисти —</span> это боры и скалеры, а холст — человеческие улыбки. И самые трогательные моменты в моей работе связаны с «передними» зубами. Потому что это никогда не бывает просто функциональной проблемой — за этим всегда стоит живая история. История человека, который привык прятать улыбку, прикрывать рот рукой при разговоре или избегать зеркал."},OBO_MNE_2:{ZAGOLOVOK:"И в этом заключается настоящая магия моей профессии",TEXT:"Я не просто ставлю пломбы и виниры — я возвращаю людям утраченное право улыбаться свободно, без оглядки и стеснения. В момент, когда после процедуры пациент сначала неуверенно взглядывает в зеркало, а через мгновение его лицо озаряет та самая, широкая, открытая улыбка… я понимаю: это не просто хорошо выполненная работа. Это возвращённая уверенность в себе."},OBO_MNE_3:{ZAGOLOVOK:"Быть стоматологом — значит видеть глубже поверхности",TEXT:"Мы видим не просто зубы — мы видим человеческие судьбы, затаённые комплексы и сокровенные надежды. И нет в нашей профессии большей награды, чем осознавать, что твои руки могут преобразить чью-то жизнь — превратить робкую, сдержанную ухмылку в сияющую, по-настоящему счастливую улыбку. Ту самую, которую больше не хочется скрывать."},OTZIVI:{ZAGOLOVOK:"Мои улыбки:",ONE:{NAME:"Иван А.",TEXT:"Огромная благодарность всему персоналу клиники и особенно врачу Людмиле! Благодаря вашему профессионализму и чуткому отношению я снова не боюсь и не стесняюсь улыбаться. Вы вернули мне не просто красивую улыбку, а уверенность в себе! Очень рекомендую!"},TWO:{NAME:"Елена Г.",TEXT:"Хочу выразить огромную благодарность моему врачу Людмиле Анатольевне! Обращался с серьезной проблемой, из-за которой давно не улыбался от души. Врач провел ювелирную работу, подробно всё объяснил на каждом этапе. Результат превзошел все ожидания! Теперь у меня не только здоровые, но и по-настоящему красивые зубы. Спасибо за ваше терпение, мастерство и за то, что вернули мне радость улыбки!"},THREE:{NAME:"Кира Н.",TEXT:"Лучший стоматолог! Людмила вернула мне улыбку и уверенность. Процесс был комфортным, а результат — просто фантастическим. Очень благодарна и всем рекомендую!"}},POLIKLINIKA:{ZAGOLOVOK:"Я работаю в Семейной поликлинике №1 города Сергиев посад",TEXT:`<span>Как стоматолог Семейной поликлиники,</span> я с уверенностью могу сказать: весь персонал сделал всё, чтобы лечение было максимально качественным и комфортным. В нашем распоряжении — современное оборудование, позволяющее проводить диагностику и процедуры на высоком уровне точности. Мы используем только проверенные материалы премиум-класса, чтобы результаты служили пациентам долгие годы.
 Атмосфера в клинике продумана до мелочей: уютные кабинеты, внимательный персонал и комфортные условия делают визиты спокойными и приятными. Я горжусь тем, что работаю здесь, и всегда рада помочь каждому пациенту почувствовать уверенность в своей улыбке.`},VALLUE:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."};function p(){[document.querySelector(".text_one"),document.querySelector(".text_two"),document.querySelector(".text_three"),document.querySelector(".zagolovok"),document.querySelector(".text")].forEach((t,n)=>{t&&setTimeout(()=>{t.classList.add("visible")},n*300)})}document.addEventListener("DOMContentLoaded",function(){setTimeout(p,400)});window.addEventListener("load",p);document.querySelector(".my").innerHTML=`

  <div class="container">
  
    <header id="selection0">
        <div class="content">
        
                <button class="btn">
                    <div class="btn_line btn_1"></div>
                    <div class="btn_line btn_2"></div>
                    <div class="btn_line btn_3"></div>
                </button>
        
                
                <div class="top_menu_head">
                    <ul>
                        <li><a href="#selection1">${e.HEAD_MENU.OBO_MNE}</a></li>
                        <li><a href="#selection2">${e.HEAD_MENU.MY_WORK}</a></li>
                        <li><a href="#selection3">${e.HEAD_MENU.OTZIVI}</a></li>
                        <li><a href="#selection4">${e.HEAD_MENU.LOCATION}</a></li>
                        <li class="menu_telefon">${e.HEAD_MENU.TEL}</li>
                    </ul>
                </div>
                
                <div class="main_head">
                        <div class="main_head_left">
                        
                            <div class="text_one">
                                ${e.HEADER_CONTAINER.TEXT1}
                            </div>
                            <div class="text_two">
                                ${e.HEADER_CONTAINER.TEXT2}
                            </div>
                            <div class="text_three">
                                ${e.HEADER_CONTAINER.TEXT3}
                            </div>
                        
                        </div>
                        
                        <div class="main_head_right">
<!--                            <img width="400px" class="main_head_right_img" src="../public/doctor.pnd.png" alt="">-->
                            <img width="400px" class="main_head_right_img" src="../public/Doctor_Female.png" alt="doctor">
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
                        ${e.O_MOEY_RABOTE.ZAGOLOVOK}
                    </div>
                    <div class="text">
                        <p>${e.O_MOEY_RABOTE.TEXT}</p>
                    </div>
                </div>
            </div>
            
            <div class="o_moey_rabote">
                <div class="o_moey_rabote_Right">
                    <div class="zagolovok_no_animate">${e.OBO_MNE_1.ZAGOLOVOK}</div>
                    <div class="text_no_animate"><p>${e.OBO_MNE_1.TEXT}</p></div>  
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
                    <div class="zagolovok_no_animate">${e.OBO_MNE_2.ZAGOLOVOK}</div>
                    <div class="text_no_animate"><p>${e.OBO_MNE_2.TEXT}</p></div>  
                </div>
            </div>
            
            <div class="o_moey_rabote">
                <div class="o_moey_rabote_Right">
                    <div class="zagolovok_no_animate">${e.OBO_MNE_3.ZAGOLOVOK}</div>
                    <div class="text_no_animate"><p>${e.OBO_MNE_3.TEXT}</p></div>  
                </div>
<!--                <div class="o_moey_rabote_Left">-->
<!--                     <img src="../public/rab2.jpg" alt="smiles">-->
<!--                </div>-->
            </div>
            
<div id="selection2" class="moi_raboti">
    
<!--    <h1 class="about-title">OUR TEAM</h1>-->

<div class="carousel-container">
	<button class="nav-arrow left">‹</button>
	<div class="carousel-track">
		<div class="card" data-index="0">
			<img src="../public/smile/img1.jpeg" alt="Team Member 1">
		</div>
		<div class="card" data-index="1">
			<img src="../public/smile/img2.jpg" alt="Team Member 2">
		</div>
		<div class="card" data-index="2">
			<img src="../public/smile/img3.jpeg" alt="Team Member 3">
		</div>
		<div class="card" data-index="3">
			<img src="../public/smile/img4.jpeg" alt="Team Member 4">
		</div>
		<div class="card" data-index="4">
			<img src="../public/smile/img5.jpg" alt="Team Member 5">
		</div>
		<div class="card" data-index="5">
			<img src="../public/smile/img2.jpg" alt="Team Member 6">
		</div>
	</div>
	<button class="nav-arrow right">›</button>
</div>

<div class="member-info">
	<h2 class="member-name">David Kim</h2>
	<p class="member-role">Founder</p>
</div>

<div class="dots">
	<div class="dot active" data-index="0"></div>
	<div class="dot" data-index="1"></div>
	<div class="dot" data-index="2"></div>
	<div class="dot" data-index="3"></div>
	<div class="dot" data-index="4"></div>
	<div class="dot" data-index="5"></div>
</div>

<div style="display: flex; justify-content: flex-end;width:100%;padding-right:10px;">
	<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="nidaltahir" data-color="#FFDD00" data-emoji="☕" data-font="Poppins" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff"><\/script>
</div>
</div>
            
            
            
            
            
            <div id="selection3" class="otzivi_moih_pacientov">
            
                    <div class="zagolovok_no_animate">${e.OTZIVI.ZAGOLOVOK}</div>
                
                    <div class="cards">
                          <div class="card_">
                              <picture>
                                  <img class="card__picture" src="../public/pacient/pac1.png" alt="art">
                              </picture>
                              <div class="card__inner">
                                  <p class="card__text">${e.OTZIVI.ONE.TEXT}</p>
                                  <h2 class="card__title">${e.OTZIVI.ONE.NAME}</h2>
                              </div>
                          </div>
                    
                          <div class="card_">
                              <picture>
                                  <img class="card__picture" src="../public/pacient/pac2.png" alt="art">
                              </picture>
                              <div class="card__inner">
                                  <p class="card__text">${e.OTZIVI.TWO.TEXT}</p>
                                  <h2 class="card__title">${e.OTZIVI.TWO.NAME}</h2>
                              </div>
                          </div>
                    
                          <div class="card_">
                              <picture>
                                  <img class="card__picture" src="../public/pacient/pac3.png" alt="art">
                              </picture>
                              <div class="card__inner">
                                  <p class="card__text">${e.OTZIVI.THREE.TEXT}</p>
                                  <h2 class="card__title">${e.OTZIVI.THREE.NAME}</h2>
                              </div>
                          </div>
                    </div>
            </div>
            
            <div id="selection4" class="poliklinnika">
                <div class="zagolovok_no_animate">${e.POLIKLINIKA.ZAGOLOVOK}</div>
                <div class="text_no_animate">${e.POLIKLINIKA.TEXT}</div>
            </div>            
            
            
        </div>
        

    </main>
    
    <footer>
        <div class="content">
<!--            ${e.VALLUE}-->
            <div class="nav">
                <ul>
                        <li><a href="#selection0">${e.HEAD_MENU.HOME}</a></li>
                        <li><a href="#selection1">${e.HEAD_MENU.OBO_MNE}</a></li>
                        <li><a href="#selection2">${e.HEAD_MENU.MY_WORK}</a></li>
                        <li><a href="#selection3">${e.HEAD_MENU.OTZIVI}</a></li>
                        <li><a href="#selection4">${e.HEAD_MENU.LOCATION}</a></li>
                        <li><a href="https://setpol.ru/sergiev-posad-vzrosloe-otdelenie/">${e.HEAD_MENU.POLIKLINIKA}</a></li>
                        <li>${e.HEAD_MENU.TEL}</li>
                </ul>
            </div>
            <div class="logo">
                <img src="../public/dentist-2-svgrepo.svg" alt="logo">
            </div>
        </div>
    </footer>
  
  </div>
  
`;const _=[{name:"Ирина Е.",role:"Домохозяйка"},{name:"Михаил Ш.",role:"Директор"},{name:"Маша Х.",role:"Дачница"},{name:"Наталья Б.",role:"UX дизайнер"},{name:"Саша Р.",role:"Менеджер"},{name:"Дмитрий Ш.",role:"Строитель"}],c=document.querySelectorAll(".card"),E=document.querySelectorAll(".dot"),m=document.querySelector(".member-name"),v=document.querySelector(".member-role"),f=document.querySelector(".nav-arrow.left"),h=document.querySelector(".nav-arrow.right");let l=0,u=!1;function o(i){u||(u=!0,l=(i+c.length)%c.length,c.forEach((t,n)=>{const d=(n-l+c.length)%c.length;t.classList.remove("center","left-1","left-2","right-1","right-2","hidden"),d===0?t.classList.add("center"):d===1?t.classList.add("right-1"):d===2?t.classList.add("right-2"):d===c.length-1?t.classList.add("left-1"):d===c.length-2?t.classList.add("left-2"):t.classList.add("hidden")}),E.forEach((t,n)=>{t.classList.toggle("active",n===l)}),m.style.opacity="0",v.style.opacity="0",setTimeout(()=>{m.textContent=_[l].name,v.textContent=_[l].role,m.style.opacity="1",v.style.opacity="1"},300),setTimeout(()=>{u=!1},800))}f.addEventListener("click",()=>{o(l-1)});h.addEventListener("click",()=>{o(l+1)});E.forEach((i,t)=>{i.addEventListener("click",()=>{o(t)})});c.forEach((i,t)=>{i.addEventListener("click",()=>{o(t)})});document.addEventListener("keydown",i=>{i.key==="ArrowLeft"?o(l-1):i.key==="ArrowRight"&&o(l+1)});let O=0,g=0;document.addEventListener("touchstart",i=>{O=i.changedTouches[0].screenX});document.addEventListener("touchend",i=>{g=i.changedTouches[0].screenX,T()});function T(){const t=O-g;Math.abs(t)>50&&(t>0?o(l+1):o(l-1))}o(0);document.querySelector(".btn").addEventListener("click",()=>{document.querySelector(".btn_2").classList.toggle("btn_2_Pushed"),document.querySelector(".btn_1").classList.toggle("btn_1_Pushed"),document.querySelector(".btn_3").classList.toggle("btn_3_Pushed"),document.querySelector(".top_menu_head").classList.toggle("top_menu_head_Visibl")});
