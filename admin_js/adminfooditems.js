//To load all available categories in Add Food Page
import { categoryCollection } from './categoriesData.js';
i = 1;
var arr1 = [];
while (i >= 1) {
    arr1.push(categoryCollection[i].name);
    //console.log(categoryCollection[i].name);
    i++;
}
console.log(arr1);

function loadCategories(){
    //Task 1.i
    //Write the code here to display category names in the Category dropdown menu on Add FoodItem webpage
    
    var catops = [];
        i = 1;
        while (i >= 1 && i <= 5) {
            catops.push(categoryCollection[i].name);
            //console.log(i);
            i++;
        };
    var cat = document.getElementById("category")


//    for (var c = 1; c <= catops.length; c++) {
//        var opt = catops[c];
//       var el = document.createElement("option");
//        el.textContent = opt;
//        el.value = opt;
        cat.appendChild(el);
    }

//To load all available cuisines in Add Food Page
function loadCuisines(){
    //Task 1.i
    //Write the code here to display cuisine names in the Cuisine dropdown menu on Add FoodItem webpage
}

//View All Food Items Info
function listFoodItems(){
    //Task 1.ii
    //Write the code here to display details of all food items available on the List Food Items webpage
}
