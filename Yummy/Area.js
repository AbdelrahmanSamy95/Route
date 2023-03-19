async function randMeals() {
    let meals = await (await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")).json();
    meals = meals['meals'];
    meals.forEach(function(meal){
        console.log(meal);
        $('#randomMeals').append(`
        <div class="col-md-3">
        <div onclick="getMealsArea('${meal.strArea}')" class="rounded-2 text-center cursor-pointer text-white">
                <i class="fa-solid fa-house-laptop fa-4x"></i>
                <h3>${meal.strArea}</h3>
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