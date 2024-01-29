var tablinks= document.getElementsByClassName('tab-links');
var tabcontents= document.getElementsByClassName('tab-content');

function showTabContent(tabname){
 for(tablink of tablinks){
      tablink.classList.remove('active-link')
 }
 for(tabcontent of tabcontents){
      tabcontent.classList.remove('active-tab')
 }
 event.currentTarget.classList.add('active-link');
 document.getElementById(tabname).classList.add('active-tab');
};

/*----------certificate----------*/
function showCertificate(certificate){
     const veiwCertificate= document.getElementById(certificate);
     veiwCertificate.style.display='block';
     document.querySelectorAll('.close').forEach((close)=>{
        close.addEventListener('click',()=>{
          veiwCertificate.style.display='none';
          })  
     })
     return 0;
}

/*-----------window onScroll----------*/

const navBar=document.querySelectorAll('.nav');
const menu= document.querySelector('.menu');
const section= document.querySelectorAll('section');

window.onscroll= ()=>{
     section.forEach((sec)=>{
           let top= window.scrollY;
           let offset= sec.offsetTop - 75; 
           let height= sec.offsetHeight;
           let id= sec.getAttribute('id');

          if(top > offset && top < offset + height){
               navBar.forEach((navbar)=>{
                    navbar.classList.remove('active-nav');
                    document.querySelector('.menu a[href*='+ id +']')
                         .classList.add('active-nav');
                    menuBar.classList.remove('fa-xmark');
                    menu.classList.remove('menu-hide')
               });
           }else if(top <= 400){
               navBar.forEach((navbar)=>{
                    navbar.classList.remove('active-nav');
               document.getElementById('home')
                    .classList.add('active-nav');
               })
           }  
     });
};

// menu bar 
const menuBar= document.querySelector('.bar i');

menuBar.addEventListener('click',()=>{
     menuBar.classList.toggle('fa-xmark');
     menu.classList.toggle('menu-hide')
})

// contact form 
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxjB0arEnsUC4KEJoJ2hSvFmbTtyGVSVyHC12rAbhDm_4kfebhDW1-_koZPKY-k7xfZ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msgSent= document.querySelector('.msg-sent p');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msgSent.innerHTML="Message sent successfully!";   
          msgSent.style.right='0';     
          setTimeout(function(){
               msgSent.innerHTML="";
               msgSent.style.right='-100%';
          },3000);
          form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
