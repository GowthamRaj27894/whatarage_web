var slideCount = 0;
var mySlide = document.getElementsByClassName('slider-count');
var dot = document.getElementsByClassName('dots');
var cardSec = document.querySelector(".card-section");
var offerCol = document.querySelector(".offer-col");
var off1 = document.getElementById("off01");
var off2 = document.getElementById("off02");
var off3 = document.getElementById("off03");
var currSlide = 0;
var myTimer = 3000;
var captionBuff = ["Getting the P300 Approval Rebate","Save up to P2.50/L on Shell fuel",  "Getting the P5,000 Welcome Rebate"];
var contentBuff = ["Apply for a Shell Citi Card here and earn your approval rebate on your first P3000 Shell Fuel purchase.",
"Apply for a Shell Citi Card here and save up to P2.50/L on Shell fuel.",
"Apply for a Shell Citi Card here and get the P5,000 welcome Rebate"];
var p = [
    'bg_banner1.jpg',
    'bg_banner2.jpg',
    'bg_banner3.jpg'
];
slideShow();
// CB();
off1.addEventListener('click',()=>{
  document.querySelector('.card-split h2').textContent = captionBuff[0];
  document.querySelector('.change').textContent = contentBuff[0];
  cardSec.style.backgroundImage = `url(${p[0]})`;

});
off2.addEventListener('click',()=>{
    document.querySelector('.card-split h2').textContent = captionBuff[1];
    document.querySelector('.change').textContent = contentBuff[1];
    cardSec.style.backgroundImage = `url(${p[1]})`;
  
  });
  off3.addEventListener('click',()=>{
    document.querySelector('.card-split h2').textContent = captionBuff[2];
    document.querySelector('.change').textContent = contentBuff[2];
    cardSec.style.backgroundImage = `url(${p[2]})`;
  
  });
function slideShow()
{

    var i = 0;
   
    var btn = document.querySelector(".apply-now");
    //btn.addEventListener('click',()=>(window.scrollTo(300,500)));
    slideCount++;
    if(slideCount > mySlide.length)
    {
        slideCount = 1;
    }
    
    for(i = 0;i< mySlide.length;i++)
    {
         mySlide[i].style.display = "none";
      
     
    }
    for(i = 0;i< dot.length;i++)
    {
        dot[i].className = dot[i].className.replace("active","");
        
    }
  
   mySlide[slideCount - 1].style.display = "block";
   dot[slideCount - 1].className += " active";
  currSlide = 0;
  
   setTimeout(slideShow, myTimer);
    
}
function currentSlide(n) {
    onClickCarousalDot(slideCount = n);
  }
function onClickCarousalDot(index){
    console.log("cur dot = "+index);
    myTimer =5000;
      if(index > mySlide.length){
          slideCount = 1;
      }
      if(index < 1){
          slideCount = mySlide.length;
      }
      for (i = 0; i < mySlide.length; i++) {
        mySlide[i].style.display = "none";  
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active", "");
        
    }
    mySlide[slideCount-1].style.display = "block";  
 
    dot[slideCount-1].className += " active";
}


// Scroll 

document.querySelector('.banner-cta a').addEventListener('click', function(){
    document.querySelector('.offer').scrollIntoView({ 
        behavior: 'smooth' 
    });
})
function CB() {
    try {
        var p = [
            '../images/bg_banner1.jpg',
            '../images/bg_banner2.jpg',
            '../images/bg_banner3.jpg'
        ];

        var counter = 0;

        setInterval(function(){
            cardSec.style.backgroundImage = `url(${p[counter++]})`;
            

            if(counter == 3){
                counter = 0;
            }
        }, 3000)
    } catch(err) {
        alert(err.message);
    }
}

