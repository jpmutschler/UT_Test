var restaurantCollection = JSON.parse(window.localStorage.getItem("restaurant"));
var restaurantId = 0;
for(var restaurant in restaurantCollection){
    restaurantId++;
}
console.log(restaurantId);

// Submission of Add Restaurant Page Form
function addRestaurant() {
    restaurantId += 1;
    console.log(restaurantId);
    var rname = document.getElementById("name").value;
    var addr = document.getElementById("desc").value;
    var contact = document.getElementById("ContactNo").value;
    var imgurl = document.getElementById("ImgURL").value;
    var link = document.getElementById("link").value;
    saveRestaurant(restaurantId, rname, addr, contact, imgurl, link);
    alert("Restaurant Added Successfully!");
    gotoAdminPage();     
  }

//Save restaurant data on add/edit
function saveRestaurant(restaurantNo, rname, addr, contact, imgurl, link){
    var restaurant;
    if(restaurantCollection==null){
        restaurant = {};
    }
    else{
        restaurant = restaurantCollection;
    }
    console.log(restaurant);
    restaurant[restaurantNo] = {
        "id" : restaurantNo,
        "name" : rname,
        "addr" : addr,
        "contact" : contact,
        "image" : imgurl,
        "link" : link
    };
    var restaurantData = JSON.stringify(restaurant);
    window.localStorage.setItem("restaurant", restaurantData);
}

//View All Restaurants Page
  function listRestaurants(){
    var restaurantTable = document.getElementById("restaurantTable");
    if(restaurantCollection !=null){
        for(var restaurantId in restaurantCollection){
            
            var restaurantObj = restaurantCollection[restaurantId];
            restaurantTable.innerHTML +='<tr><td>'+restaurantObj["id"]+'</td>'+
                                '<td>'+restaurantObj["name"]+'</td>'+
                                '<td><img src='+restaurantObj["image"]+' style="width:80px;height:80px"></td>'+
                                '<td>'+restaurantObj["addr"]+'</td>'+
                                '<td>'+restaurantObj["contact"]+'</td>'+
                                '<td><button class="btn btn-primary" id="'+restaurantObj["id"]+'">Edit</button></td></tr>'  
        };
    }
}

  
//Navigate to Admin Page
function gotoAdminPage(){
    window.location.href="admin.html";
}