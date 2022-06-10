import {getCount} from "./common.js"
import {getCountheart,dropdowns,searchfilterdropdown} from "./common.js"

//header start ALL CATEGORIES dropdown
  dropdowns();
//header end ALL CATEGORIES dropdown




//start searchfilterdropdown
  searchfilterdropdown();
//end searchfilterdropdown



  //owl-carousel start
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,

    smartSpeed:1500,
    animateIn:'linear',
    animateOut:'linear',


    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
 })
 //owl-carousel start



 //tab-menu -start
  let catnames =document.querySelectorAll(".category-name div")
 let content = document.querySelectorAll(".product-image .row")

  catnames.forEach(catname => {
    catname.addEventListener("click",function(){ 
        
      let actived=document.querySelector(".category-name .active");
      actived.classList.remove("active");
      this.classList.add("active");

      content.forEach(contnt =>{
        if (this.getAttribute("data-id")!=contnt.getAttribute("data-id")) {
          contnt.classList.add("d-none")
        }

        else{
          contnt.classList.remove("d-none")
        }


      })
   

    })
    
  });
 //tab-menu end


 //start sliders col-6
 $('.owl-carousel').owlCarousel({

  nav:true,
  // Infinity:true,
  autoplay:true,
  autoplayTimeout:1000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
 //end sliders col-6





 //Basket starts
let products=document.querySelectorAll("#addproduct")
let count=document.querySelector(".basket-count")


if(JSON.parse(localStorage.getItem("products")==null)){
  localStorage.setItem("products",JSON.stringify([]));
}

let productList=JSON.parse(localStorage.getItem("products"))

 products.forEach(product => {
  
 product.addEventListener("click",function(e){
    e.preventDefault();

    
    let productimage=this.parentNode.parentNode.previousElementSibling.getAttribute("src");
    let productname=this.parentNode.parentNode.nextElementSibling.childNodes[1].innerText;
    let productprice=this.parentNode.parentNode.parentNode.lastElementChild.innerText;
    let productid=this.parentNode.parentNode.parentNode.parentNode.getAttribute("data-id");
    
    let existproduct=productList.find(m=>m.id==productid);

    if(existproduct==undefined){
      productList.push({
        id:productid,
        image:productimage,
        name:productname,
        price:productprice,
        count:1
   
      });

      alert("Product Added Success!")



    
      
    }

    else{
      alert("You have added this Product to your Cart,Please check your basket")
    }

 
    localStorage.setItem("products", JSON.stringify(productList))
    count.innerText=getCount(productList)
  });


  
 })

 count.innerText=getCount(productList)
 //Basket-End



 //start-favoruites
let hearticon=document.querySelectorAll("#addheart")

if(JSON.parse(localStorage.getItem("FavoriProduct"))==null){
  localStorage.setItem("FavoriProduct",JSON.stringify([]));
}

let favoriList=JSON.parse(localStorage.getItem("FavoriProduct"))
let heartcount=document.querySelector(".heart-count")

hearticon.forEach(hearticons => {



  hearticons.addEventListener("click",function(e){

    let favoriImage=this.parentNode.parentNode.previousElementSibling.getAttribute("src");
    let favoriname=this.parentNode.parentNode.nextElementSibling.childNodes[1].innerText;
    let favoriprice=this.parentNode.parentNode.parentNode.lastElementChild.innerText;
    let favoriid=this.parentNode.parentNode.parentNode.parentNode.getAttribute("data-id");

    let existproduct=favoriList.find(m=>m.id==favoriid);

    if(existproduct==undefined){
      favoriList.push({
        id:favoriid,
        image:favoriImage,
        name:favoriname,
        price:favoriprice
   
      });

      alert("Product Added Success!")
      
    }

    else{
      alert("You have added this Product to your  Favourites page,Please check your Favourites Page")
  
    }

  

    



  localStorage.setItem("FavoriProduct", JSON.stringify(favoriList))
  heartcount.innerText=getCountheart(favoriList)

    e.preventDefault();
  })
});

heartcount.innerText=getCountheart(favoriList)
//end-favoruites







