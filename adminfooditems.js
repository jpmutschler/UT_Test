//To load all available categories in Add Food Page

function loadCategories() {
    //Task 1.i
    //Write the code here to display category names in the Category dropdown menu on Add FoodItem webpage
   Object.keys(categoryCollection)
       .sort()
       .forEach((opt) => {
           var option = document.createElement('option');
           option.value = categoryCollection[opt].name;
           option.textContent = categoryCollection[opt].name;
           document.getElementById('category').appendChild(option);
       });
       while (categoryCollection.options.length > 0) {
        select.remove(0);
        };   
}

//To load all available cuisines in Add Food Page

function loadCuisines() {
    //Task 1.i
    Object.keys(cuisineCollection)
       .sort()
       .forEach((opt) => {
           var option2 = document.createElement('option');
           option2.value = cuisineCollection[opt].name;
           option2.textContent = cuisineCollection[opt].name;
           document.getElementById('cuisine').appendChild(option2);
       });
}

//View All Food Items Info
function listFoodItems() {
    //Task 1.ii
    Object.keys(foodItemsCollection)
       .sort()
       .forEach((opt) => {
           var option3 = document.createElement('option');
           option3.value = foodItemsCollection[opt].title;
           option3.textContent = foodItemsCollection[opt].title;
           document.getElementById('fname').appendChild(option3);
       });
}