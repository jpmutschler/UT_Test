var cuisineCollection = JSON.parse(window.localStorage.getItem("cuisine"));
var categoryCollection = JSON.parse(window.localStorage.getItem("category"));
var restaurantCollection = JSON.parse(window.localStorage.getItem("restaurant"));

function loadProductContent(){
    //document.getElementById("wholemenu").innerHTML='<button class="btn btn-info" onclick=location.href="./productdetail.html?wholemenu=yes"><h5>See All Menu Options</h5></button>';
    loadCuisines();
    loadCategories();
    loadRestaurants();
    
};
let styleText="",hrefText="";

function loadCuisines(){
    hrefText="select_restaurant.html";
    //Modify styles as per your choice
    //styleText="width:100px;height:100px;border-radius:10px 25px;padding:5px;margin:auto;";
    //Complete Task 1.i here
    
        var parentElement = document.getElementById("cuisine");
        var cat = 1;
        parentElement.innerHTML="";
        for(cuisine in cuisineCollection){
            var cuisineObj = cuisineCollection[cuisine];
            var cuisineImg = cuisineObj["image"];
            var cusineName = cuisineObj["name"];
            parentElement.innerHTML +='<div class="col" id="cat'+ cat +'"><img src="'+cuisineImg+'" class="mx-auto d-block" style="width:200px;height:200px;border-radius:5px 25px"><p style="text-align:center; color:white"><b>'+cusineName+'</b></p></div>';
            cat++;
        };
    //'<button class="btn btn-info" onclick=location.href="productdetail.html?wholemenu=yes"><h5>See All Menu Options</h5></button>';
};
function loadCategories(){
     hrefText="select_restaurant.html";
     //Modify styles as per your choice
     //styleText="width:100px;height:100px;border-radius:50%;padding:5px;margin:auto;";
     //Complete Task 1.ii here
     var parentElement = document.getElementById("category");
     var cat = 1;
     parentElement.innerHTML="";
     for(category in categoryCollection){
        var categoryObj = categoryCollection[category];
        var categoryimg = categoryObj["image"];
        var categoryName = categoryObj["name"];
        parentElement.innerHTML +='<div class="col" id="cat'+ cat +'"><img src="'+categoryimg+'" class="mx-auto d-block" style="width:200px;height:200px;border-radius:5px 25px"><p style="text-align:center; color:white"><b>'+categoryName+'</b></p></div>';
        cat++;
     };
    
 };

function loadRestaurants(){
    hrefText="cart.html";
    //Modify styles as per your choice
    //styleText="width:200px;height:200px;border-radius:5px 25px";
    //Complete Task 1.iii here
    var parentElement = document.getElementById("restaurant");
     var cat = 1;
     parentElement.innerHTML="";
     for(restaurant in restaurantCollection){
        var restaurantObj = restaurantCollection[restaurant];
        var restaurantimg = restaurantObj["image"];
        var restaurantName = restaurantObj["name"];
        var restaurantLink = restaurantObj["link"];
        parentElement.innerHTML +='<div class="col" id="cat'+ cat +'"><a href="'+restaurantLink+'" target="_blank"><img src="'+restaurantimg+'" class="mx-auto d-block" style="width:200px;height:200px;border-radius:5px 25px"><p style="text-align:center; color:white"><b>'+restaurantName+'</b></p></a></div>';
        cat++;
     };
};
