


async function randMeals() {
    let meals = await (await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")).json();
    meals = meals['meals'];
    meals.forEach(function(meal){
        console.log(meal);
        $('#randomMeals').append(`
        <div class="col-md-3">
                <div onclick="getIngredientsMeals('${meal.strIngredient}')" class="rounded-2 text-center cursor-pointer text-white">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${meal.strIngredient}</h3>
                        <p>${meal.strDescription.split(" ").slice(0,20).join(" ")}</p>
                </div>
        </div>`);
    });
    getIngredientsMeals(ingredients);
}


async function getIngredientsMeals(ingredients) {
    randomMeals.innerHTML = ""
    let response = await (await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)).json();
    console.log(response);
}



$(document).ready(function(){
    $("#loading").fadeOut(1000);   
    randMeals();
})

$(".side-navbar .fa-bars").click(function(){
    $(".nav-bar").show(1000);
    $(".nav-bar").addClass('d-flex');
    $('.fa-bars').addClass('d-none');
    $('.fa-x').removeClass('d-none');
});

$(".side-navbar .fa-x").click(function(){
    $(".nav-bar").hide(1000);
    $(".nav-bar").removeClass('d-flex');
    $('.fa-x').addClass('d-none');
    $('.fa-bars').removeClass('d-none');
});

async function getIngredientsMeals(oop) {
    let Data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${oop}`)
    
    console.log(Data);
    Data = await Data.json()
    console.log(Data);
    
    displayCoe(Data.meals)
}

function displayCoe(arr) {
    let catMeal = "";

    for (let i = 0; i < arr.length; i++) {
        catMeal += `
        <div class="col-md-3">
                <div  class="meal position-relative overflow-hidden rounded-2 cursor-pointer card m-2 bg-transparent">
                    <img class="w-100 image" src="${arr[i].strMealThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute text-center text-black p-2 hover">
                        <h3>${arr[i].strMeal}</h3>
                    </div>
                </div>
        </div>
        `
    }
    randomMeals.innerHTML = catMeal
}
