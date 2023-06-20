function alertCity() {
    alert("Loading Weather Report...")
}

function removeCookie() {

    var element = document.getElementById("cookie-cookie")
    element.remove()
}

// function tempChange() {
//     var valNum = document.getElementsByClassName("red-temp","blue-temp");
//     document.getElementsByClassName("red-temp","blue-temp").innerHTML = (valNum-32)/1.8;
// }

function tempChange(element) {
    // alert("You picked " + element.value);
    if (element.value == "F°") {
        temp1.innerHTML = "75°"
        console.log("switched to F°")
    } else {
        temp1.innerHTML = "24°"
        console.log("switched to C°")
    }
    if (element.value == "F°") {
        temp2.innerHTML = "65°"
        console.log("switched to F°")
    } else {
        temp2.innerHTML = "18°"
        console.log("switched to C°")
    }
    if (element.value == "F°") {
        temp3.innerHTML = "80°"
        console.log("switched to F°")
    } else {
        temp3.innerHTML = "27°"
        console.log("switched to C°")
    }
    if (element.value == "F°") {
        temp4.innerHTML = "66°"
        console.log("switched to F°")
    } else {
        temp4.innerHTML = "19°"
        console.log("switched to C°")
    }
    if (element.value == "F°") {
        temp5.innerHTML = "69°"
        console.log("switched to F°")
    } else {
        temp5.innerHTML = "21°"
        console.log("switched to C°")
    }
    if (element.value == "F°") {
        temp6.innerHTML = "61°"
        console.log("switched to F°")
    } else {
        temp6.innerHTML = "16°"
        console.log("switched to C°")
    }
    if (element.value == "F°") {
        temp7.innerHTML = "78°"
        console.log("switched to F°")
    } else {
        temp7.innerHTML = "26°"
        console.log("switched to C°")
    }
    if (element.value == "F°") {
        temp8.innerHTML = "70°"
        console.log("switched to F°")
    } else {
        temp8.innerHTML = "21°"
        console.log("switched to C°")
    }

}

var temp1 = document.querySelector("#red-temp-1");
var temp2 = document.querySelector("#red-temp-2");
var temp3 = document.querySelector("#red-temp-3");
var temp4 = document.querySelector("#red-temp-4");
var temp5 = document.querySelector("#red-temp-5");
var temp6 = document.querySelector("#red-temp-6");
var temp7 = document.querySelector("#red-temp-7");
var temp8 = document.querySelector("#red-temp-8");

