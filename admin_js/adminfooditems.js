//window.localStorage.clear("fooditem")
var categoryCollection = JSON.parse(window.localStorage.getItem("category"));
var cuisineCollection = JSON.parse(window.localStorage.getItem("cuisine"));
var foodCollection = JSON.parse(window.localStorage.getItem("fooditem"));

var foodId = 0;
for(var fooditem in foodCollection){
    foodId++;
}

//To load all available categories in Add Food Page
function loadCategories(){
    var parentElement = document.getElementById("category");
    parentElement.innerHTML="";
    for(categoryId in categoryCollection){
        var categoryObj = categoryCollection[categoryId];
        var categoryName = categoryObj["name"];
        parentElement.innerHTML +='<option value="'+categoryName+'">'+categoryName+'</option>';
    };
}
//To load all available cuisines in Add Food Page
function loadCuisines(){
    var parentElement = document.getElementById("cuisine");
    parentElement.innerHTML="";
    for(cuisine in cuisineCollection){
        var cuisineObj = cuisineCollection[cuisine];
        var cuisineName = cuisineObj["name"];
        parentElement.innerHTML +='<option value="'+cuisineName+'">'+cuisineName+'</option>';
    };
}

//On adding a new food item
function addFoodItem(){ 
    foodId += 1;
    console.log(foodId);
    var fname = document.getElementById("fname").value;
    var desc = document.getElementById("desc").value;
    var inStock = document.getElementById("Available").checked == true ? "Yes" : "No";
    var isVeg = document.getElementById("Veg").checked == true ? "Yes" : "No";
    var category = document.getElementById("category").value;
    var cuisine = document.getElementById("cuisine").value;
    var img = document.getElementById("ImgURL").value;
    saveFoodItem(foodId, fname, desc, inStock, isVeg, category, cuisine, img);
    alert("Food Item Added Successfully!");
    gotoAdminPage();
};

//Save food data on add/edit
function saveFoodItem(foodId, fname, desc, inStock, isVeg, category, cuisine, img){
    ///WRITE THE CODE HERE TO COMPLETE THE TASK No. 1
    //CODE TO RETREIVE THE VALUES SUBMITTED ON add_food.html

    var fooditem;
    if(foodCollection==null){
        fooditem = {};
    }
    else{
        fooditem = foodCollection;
    }
    fooditem[foodId] = {
        "id" : foodId,
        "name" : fname,
        "description" : desc,
        "inStock" : inStock,
        "isVeg" : isVeg,
        "category" : category,
        "cuisine" : cuisine,
        "image" : img
    }

    var foodData = JSON.stringify(fooditem);
    window.localStorage.setItem("fooditem", foodData);
}

//View All Food Items Info
function listFoodItems(){
    var fooditemTable = document.getElementById("fooditemstable");
    for(var fooditemId in foodCollection){
        var fooditemObj = foodCollection[fooditemId];
        fooditemTable.innerHTML += "<tr><td>"+fooditemObj['id']+"</td>"+
                                    "<td>"+fooditemObj['name']+"</td>"+
                                    "<td>"+fooditemObj['description']+"</td>"+
                                    "<td>"+fooditemObj['inStock']+"</td>"+
                                    "<td>"+fooditemObj['isVeg']+"</td>"+
                                    "<td>"+fooditemObj['category']+"</td>"+
                                    "<td>"+fooditemObj['cuisine']+"</td>"+
                                    '<td><img src="'+fooditemObj['image']+'" style="width:100px;height:100px;"'+'></td>'+
                                    '<td><button id="'+fooditemObj['id']+'" class="btn btn-primary">Edit</button></td></tr>';
    }
}

//Navigate to Admin Page
function gotoAdminPage(){
    window.location.href="admin.html";
}