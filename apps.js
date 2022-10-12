const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");

rightbtn.addEventListener('click', function(event){
    console.log('do0ne');
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft +=1100;
    event.preventDefault();
})
leftbtn.addEventListener('click', function(event){
    console.log('do0ne');
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft -=1100;
    event.preventDefault();
})
const leftbtn1 = document.querySelector(".btn-1b");
const rightbtn1 = document.querySelector(".btn-1a");

rightbtn.addEventListener('click', function(event){
    console.log('do0ne');
    const conent = document.querySelector('.product-slide-1');
    conent.scrollLeft +=1100;
    event.preventDefault();
})
leftbtn.addEventListener('click', function(event){
    console.log('do0ne');
    const conent = document.querySelector('.product-slide-1');
    conent.scrollLeft -=1100;
    event.preventDefault();
})
const leftbtn2 = document.querySelector(".btn-1bb");
const rightbtn2 = document.querySelector(".btn-1aa");

rightbtn.addEventListener('click', function(event){
    console.log('do0ne');
    const conent = document.querySelector('.product-slide-2');
    conent.scrollLeft +=1100;
    event.preventDefault();
})
leftbtn.addEventListener('click', function(event){
    console.log('do0ne');
    const conent = document.querySelector('.product-slide-2');
    conent.scrollleft -=1100;
    event.preventDefault();
})
const leftbtn3 = document.querySelector(".btn-1bbb");
const rightbtn3 = document.querySelector(".btn-1aaa");

rightbtn.addEventListener('click', function(event){
    console.log('do0ne');
    const conent = document.querySelector('.product-slide-3');
    conent.scrollLeft +=1100;
    event.preventDefault();
})
leftbtn.addEventListener('click', function(event){
    console.log('do0ne');
    const conent = document.querySelector('.product-slide-3');
    conent.scrollleft -=1100;
    event.preventDefault();
})

const backtop = document.querySelector(".backtop");
backtop.addEventListener("click",() => {
    window.scrollTo({
        top:0,
        behavior:"smooth"   });
})
const sidebar =document.querySelector(".sidebar");
const cross =document.querySelector(".fa-xmark");
const black =document.querySelector(".black");
const sidebtn =document.querySelector(".second-1");

sidebtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
})
cross.addEventListener("click", () => {
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
})

const sign= document.querySelector(".ac");
const tri= document.querySelector(".triangle");
const signin= document.querySelector(".hdn-sign")

sign.addEventListener("click",()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
})
function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('main').style.opacity='0.7'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('main').style.opacity='1'
}