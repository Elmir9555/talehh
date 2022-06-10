//getBasketCount
export function getCount (list){
    return list.length;
}
//getBasketCount


//getFavoriCount
export function getCountheart (heart){
    return heart.length;
}
//getFavoriCount


//basketCount
export function basketCount(sum){
    sum.innerText=JSON.parse(localStorage.getItem("products")).length
}
//basketCount


//favoriCount
export function favoriCount(sum){
    sum.innerText=JSON.parse(localStorage.getItem("FavoriProduct")).length
}
//favoriCount


//header ALL CATEGORIES dropdown
export function dropdowns(){
    $(document).ready(function(){

        $(".dropbtns").click(function(){
          console.log("salam");
          $("#myDropdown").toggle(1000);
        });
      
      });
      
    
    
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtns')) {
          var dropdowns = document.getElementsByClassName("dropdown-contents");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
}
//header ALL CATEGORIES dropdown



 //searchfilter dropdown
export function searchfilterdropdown() {
    $(document).ready(function(){

        $("#all-categ").click(function(){
          $(".dropdown-content-cate").toggle(800);
         
        })
       });
}

  //searchfilter dropdown