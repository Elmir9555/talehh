import {getCount} from "./common.js"
import {favoriCount,basketCount,getCountheart,dropdowns,searchfilterdropdown} from "./common.js"

//header start ALL CATEGORIES dropdown
dropdowns();
//header end ALL CATEGORIES dropdown


//start searchfilter
searchfilterdropdown();
//end searchfilter



//basket-start
let cart=document.querySelector(".cart .container")
let removeall=document.querySelector(".all-remove button")
removeall.addEventListener("click",function(e){
  localStorage.removeItem("products")
  window.location.reload();
})

let productss=[];
if (JSON.parse(localStorage.getItem("products")!=null)) {
   productss= JSON.parse(localStorage.getItem("products"))
  //  let price=productss.map(m=>m.price)
  //  console.log(price);
   
   
}

ShowBasket();
function ShowBasket(){
  
  for (const prduct of productss) {
    let pricecount=prduct.price.replace('$','')
   
    
    cart.innerHTML+=` 
    <div class="products-cart">
    <div class="image-name">
    <div class="img">
        <img src="${prduct.image}" style="width: 100%;height: 100%;"alt="">
    </div>
    <div class="names">
        ${prduct.name}
    </div>
  </div>
  <div class="value-price-count-total">
    <div class="price-value">
       ${prduct.price}
    </div>
    <div class="count-price">
        <span class="minus">
            -
        </span>
  
        <span  class="cnt">
         1
        </span>
        <span class="plus">
            +
        </span>
    </div>
    <div class="total-value">
    ${pricecount}
    </div>
    <div class="x">
        <i class="fas fa-times"></i>
    </div>
  </div>
  </div>
    `
    let countt=document.querySelector(".cnt")
    
    console.log(countt.innerText*pricecount);
  

  }
}


let heartcount=document.querySelector(".heart-count")
favoriCount(heartcount)


let basketcount=document.querySelector(".basket-count")
basketCount(basketcount)


//increase count
$(document).on("click",".plus",function(e){
  
    var count=Number(e.target.parentElement.children[1].innerText)
   count++;
   e.target.parentElement.children[1].innerText=count;

})

$(document).on("click",".minus",function(e){
  var count=Number(e.target.parentElement.children[1].innerText)
  if(count==0){
    count=0;
  }
  else{
    count--;
    e.target.parentElement.children[1].innerText=count
  }


})
//increase count


//end-basket

