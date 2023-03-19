



async function NameSearch(obj) {
    let Data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${obj}`)
    
    Data = await Data.json()
    
    Data.meals ?  displayItems(Data.meals): displayItems([])
    
}

async function LetterSearch(obj) {
    obj == "" ? obj = "a" : "";
    let Data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${obj}`)
    Data = await Data.json()
    Data.meals ? displayItems(Data.meals) : displayItems([])
}


function displayItems(array){
    var blackBox="";
    for (var i = 0; i < array.length; i++) {
    blackBox +=` <div class="col-md-3">
    <div onclick="getMealDetails('${array[i].idMeal}')" class="card position-relative rounded-3 overflow-hidden">
    <div class="d-flex justify-content-start align-items-center ">
        <h3>${array[i].strMeal}</h3>
        </div>
        <img class="w-100" src="${array[i].strMealThumb}" alt="" />
    </div>
    </div>`
    }
document.getElementById("randomMeals").innerHTML =blackBox
   
   }












$(document).ready(function () {
    $("#loading").fadeOut(1000);
})

$(".side-navbar .fa-bars").click(function () {
    $(".nav-bar").show(1000);
    $(".nav-bar").addClass('d-flex');
    $('.fa-bars').addClass('d-none');
    $('.fa-x').removeClass('d-none');
});

$(".side-navbar .fa-x").click(function () {
    $(".nav-bar").hide(1000);
    $(".nav-bar").removeClass('d-flex');
    $('.fa-x').addClass('d-none');
    $('.fa-bars').removeClass('d-none');
});































$(document).ready(function(){
    $("#loading").fadeOut(1000);    
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