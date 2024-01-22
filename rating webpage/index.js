const main=document.querySelector(".main")
const result=document.querySelector(".result")
const circle=document.querySelectorAll(".circle")
const submit_btn=document.querySelector(".submit_btn")
const rate_again_btn=document.querySelector(".rate_again_btn")
const rating=document.querySelector(".rating")

circle.forEach((circle) =>{
    circle.addEventListener("click",()=>{
        rating.innerHTML=circle.innerHTML
    })
})

submit_btn.addEventListener("click" ,()=>{
    result.classList.remove("hidden")
    main.classList.add("hidden")
})
rate_again_btn.addEventListener("click" ,()=>{
    result.classList.add("hidden")
    main.classList.remove("hidden")
})