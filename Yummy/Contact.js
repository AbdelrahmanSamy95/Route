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





// function inputValidation(){
//     if (nameValidate()&&
//     ageValidate()&&
//     emailValidate()&&
//     numberValidate()&&
//     passwordValidate()&&
//     rePasswordValidate()) {
        
//     } else {
        
//     }
// }


function nameValidate(pattern) {
    var valid = /^[A-Za-z ]+$/.test(pattern);
    if (valid) {
      console.log("if=>", valid);
      document.querySelector(".alert").classList.add( "d-none")
      return valid;
    } else {
      console.log("else=>", valid);
      document.querySelector(".alert").classList.remove("d-none")
      return valid;
    }
  }


  function ageValidate(pattern) {
    var valid = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(pattern);
    if (valid) {
      console.log("if=>", valid);
      document.querySelector("#alert4").classList.add( "d-none")
      return valid;
    } else {
      console.log("else=>", valid);
      document.querySelector("#alert4").classList.remove("d-none")
      return valid;
    }
  }


  function emailValidate(pattern) {
    var valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(pattern);
    if (valid) {
      console.log("if=>", valid);
      document.querySelector("#alert3").classList.add( "d-none")
      return valid;
    } else {
      console.log("else=>", valid);
      document.querySelector("#alert3").classList.remove("d-none")
      return valid;
    }
  }


  function numberValidate(pattern) {
    var valid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(pattern);
    if (valid) {
      console.log("if=>", valid);
      document.querySelector("#alert1").classList.add( "d-none")
      return valid;
    } else {
      console.log("else=>", valid);
      document.querySelector("#alert1").classList.remove("d-none")
      return valid;
    }
  }


  function passwordValidate(pattern) {
    var valid = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(pattern);
    if (valid) {
      console.log("if=>", valid);
      document.querySelector("#alert2").classList.add( "d-none")
      return valid;
    } else {
      console.log("else=>", valid);
      document.querySelector("#alert2").classList.remove("d-none")
      return valid;
    }
  }

  function rePasswordValidate(pattern) {
    var valid = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(pattern);
    if (valid) {
      console.log("if=>", valid);
      document.querySelector("#alert5").classList.add( "d-none")
      return valid;
    } else {
      console.log("else=>", valid);
      document.querySelector("#alert5").classList.remove("d-none")
      return valid;
    }
  }

