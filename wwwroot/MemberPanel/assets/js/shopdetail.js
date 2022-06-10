import {favoriCount,basketCount,getCountheart, dropdowns,searchfilterdropdown} from "./common.js"
//header start ALL CATEGORIES dropdown
dropdowns();
//header end ALL CATEGORIES dropdown


//start searchfilter
searchfilterdropdown();
//end searchfilter

//tab-menu
$(document).ready(function(){
  $("span").click(function(){
    $(".active").removeClass("active");
    $(this).addClass("active");
  })
})

let btn=document.querySelectorAll(".center span")
let content=document.querySelectorAll(".tab-menu .description")

btn.forEach(btns=>{
  btns.addEventListener("click",function(){

    
    content.forEach(contnt=>{
      if(this.getAttribute("data-id")!=contnt.getAttribute("data-id")){
        contnt.classList.add("d-none");
      }
      else{
        contnt.classList.remove("d-none");
      }
    })
   
  })
})
//tab-menu


//increase count
let minus=document.querySelector(".minus");
let plus=document.querySelector(".plus");
let i=document.querySelector(".cnt");
let count = 0;
i.innerText=count;

minus.addEventListener("click",function(){
  if(count==0){
    i.innerText=0;
  }
  else{
    count--;
    i.innerText=count;
  }
})

plus.addEventListener("click",function(){
  count++;
  i.innerText=count;

})
//increase count


//basket count
let heartcount=document.querySelector(".heart-count")
favoriCount(heartcount)

let basketcount=document.querySelector(".basket-count")
basketCount(basketcount)
//basket count





