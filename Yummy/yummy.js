



async function randMeals() {
    let meals = await (await fetch("https://themealdb.com/api/json/v1/1/search.php?s=")).json();
    meals = meals['meals'];
    meals.forEach(function(meal){
        console.log(meal);
        $('#randomMeals').append(`
        <div class="col-md-3">
        <div class="card border-0 m-2 overflow-hidden rounded-2" id="homeClick">
        <a href="Details.html">
        <img src="${meal.strMealThumb}" class="card-img-top image" alt="...">
        </a>
        <div class="hover d-flex justify-content-center align-items-center">
            <div class="text-center fw-bolder">${meal.strMeal}</div>
        </div>
        </div>
        </div>`);
    });
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

