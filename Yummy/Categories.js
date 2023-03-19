// async function CatMeals() {
//     let catMeals = await (await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")).json();
//     console.log(catMeals);
//     catMeals = catMeals['catMeal'];
//     catMeals.forEach(function(catMeal){
//         console.log(catMeal);
//         $('#CatMeals').append(`
//         <div class="col-md-3">
//         <div ('${catMeal.categories.strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
//             <img class="w-100" src="${catMeal.categories.strCategoryThumb}">
//             <div class="meal-hover position-absolute text-center text-black p-2">
//                 <h3>${catMeal.categories.strCategory}</h3>
//                 <p>${catMeal.categories.strCategoryDescription}</p>
//             </div>
//         </div>
// </div>`);
//     });
// }


// async function catApi() {
//     let catFood = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
//     let finalCatApi = await catFood.json();
//     console.log(finalCatApi);
//     function catList() {
//         const catContainerList = document.querySelector(".contentContainer");
//         let catMeal = ``;
//         for (let i = 0; index <array.length; i++) {
//             catMeal += `
//             <div class="col-md-3">
//                     <div ('${array[i].strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
//                         <img class="w-100" src="${array[i].strCategoryThumb}">
//                     <div class="meal-hover position-absolute text-center text-black p-2">
//                         <h3>${array[i].strCategory}</h3>
//                             <p>${array[i].strCategoryDescription}</p>
//                         </div>
//                     </div>
//             </div>`
//         }
//         catContainerList.innerHTML = catMeal;
//     }
//     catList(finalCatApi.categories);
// }

// finalCatApi.categories


async function getCategories() {
    rowData.innerHTML = "";
    $("#loading").fadeIn(300)

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    response = await response.json();

    displayCategories(response.categories);
    console.log(response);
}
getCategories();

function displayCategories(array) {
    let catMeal = "";

    for (let i = 0; i < array.length; i++) {
        catMeal += `
        <div class="col-md-3">
        <div class="card position-relative rounded-3 m-2 bg-transparent overflow-hidden">
                <div onclick="CategoryCoe('${array[i].strCategory}}')  class="meal position-relative overflow-hidden rounded-2 cursor-pointer card m-2 bg-transparent">
                    <img class="w-100 image" src="${array[i].strCategoryThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute text-center text-black p-2 hover">
                        <h3>${array[i].strCategory}</h3>
                        <p>${array[i].strCategoryDescription}</p>
                    </div>
                </div>
                </div>

        </div>
        `
    }
    rowData.innerHTML = catMeal
}



async function CategoryCoe(oop) {
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
    rowData.innerHTML = catMeal
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