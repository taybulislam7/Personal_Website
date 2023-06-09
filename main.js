/*===== MENU SHOW =====*/
var showMenu = (toggleId, navId) =>{
    var toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
var navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    var navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


var sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    var scrollY = window.pageYOffset

    sections.forEach(current =>{
        var sectionHeight = current.offsetHeight
        var sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
var sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset:true
})

sr.reveal('.home__title',{})
sr.reveal('.home__scroll',{delay:200})
sr.reveal('.home__img',{origin:'right',delay:200})

sr.reveal('.about__img',{delay:500})
sr.reveal('.about__subtitle',{delay:300})
sr.reveal('.about__profession',{delay:400})
sr.reveal('.about__text',{delay:500})
sr.reveal('.about__social-icon',{delay:600, interval:200})


sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__name',{distance:'20px',delay:50,interval: 100})
sr.reveal('.skills__img',{delay:400})

sr.reveal('.portfolio__img',{interval:200})


sr.reveal('.contact__subtitle',{})
sr.reveal('.contact__text',{interval: 200})
sr.reveal('.contact__input',{delay:400})
sr.reveal('.contact__button',{delay:600})
// ggstst


//contract backend
btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message= document.getElementById('message').value;
    var body = 'name:' +name+ '<br>email:' +email+ '<br>subject:' 
    +subject+ '<br>message'+message;


    Email.send({
    SecureToken : "209965cd-8f6c-4946-b295-ba4e0623b5de",
    To : 'nillshopno55@gmail.com',
    From : 'nillshopno55@gmail.com',
    Subject : subject,
    Body : body
}).then(
  message => alert(message)
);
})
