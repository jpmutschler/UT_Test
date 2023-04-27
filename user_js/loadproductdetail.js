function loadFoodItems(){
    let foodCollection = Object.values(JSON.parse(window.localStorage.getItem("fooditem")));
    if(foodCollection!=null){
        let foodItemsTable=document.getElementById("fooditems");
        foodItemsTable.innerHTML='<tr><th>Food Item Image</th><th>Food Item Name</th><th>Available in Restaurants</th><th>Rate</th></tr>';
        if(foodCollection !=null){
            for(var foodItemId in foodCollection){
                var foodItem = foodCollection[foodItemId];
        
                let restaurants=getRestaurant(foodItem.id);
                var optnText='<select class="restaurants" id="foodNo'+foodItem.id+
                '" onfocus="getPriceByRestaurant(this.value,this.id)" onchange="getPriceByRestaurant(this.value,this.id)">';
                try{
                    Object.entries(restaurants).forEach(element=>{
                        optnText = optnText+'<option id="'+element[0]+'" value="'+element[0]+'" >'+element[1]+'</option>';
                    });
                }
                catch{}
                optnText = optnText+'</select>'
        
                var cells = '<tr><td><a href="../select_restaurant.html?fooditem='+foodItem.id+
                '"><img src='+foodItem.image+' width="50px" height="50px"></a></td>'+
                '<td class="fooditems" id='+foodItem.id+'><a href="../select_restaurant.html?fooditem='+foodItem.id+'">'
                +foodItem.title+'</td><td>'+optnText+'</a></td>'+
                '<td><input type="number" id="rate'+foodItem.id+'" class="foodrate" disabled></td></tr>'
            
                foodItemsTable.innerHTML= foodItemsTable.innerHTML + cells;
            }
        }
    }
}

function getRestaurant(foodNo){
    let restaurantData=Object.entries(JSON.parse(window.localStorage.getItem("restaurant")));
    let menuData = Object.values(JSON.parse(window.localStorage.getItem("menu")));
    //Complete the code for Task 2.i here 
}

function getPriceByRestaurant(restaurantNo,foodNoId){    
    menuData = Object.values(JSON.parse(window.localStorage.getItem("menu")));
    let foodNo=foodNoId.split("foodNo")[1];
    var rateElement=document.getElementById("rate"+foodNo);
    //Complete the code for Task 2.ii here
}