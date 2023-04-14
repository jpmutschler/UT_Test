//Function to populate all available restaurant names in the drop down menu on List Food Menu web page
function loadRestaurants(){
    var parentElement = document.getElementById("restaurant");
    parentElement.innerHTML="";
    for(var restaurantId in restaurantCollection){
        var restaurantObj = restaurantCollection[restaurantId];
        var restaurantName = restaurantObj["name"];
        var restaurantNo = restaurantObj["id"];
        parentElement.innerHTML +='<option id="'+restaurantNo+'" value="'+restaurantNo+'">'+restaurantName+'</option>';
    };
}

//View All Restaurants Page
  function listMenu(){
    var restaurantNo = document.getElementById("restaurant").value;
    var foodItemsTable = document.getElementById("fooditems");
    //Task 2.i
    //Write the rest of the code to display the menu details offered by the selected restaurant in the List Food Menu web page
}