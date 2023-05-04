let button = document.querySelector(".button");
button.onclick = function() {
    let input1 = document.querySelector(".input-one").value;
    let input2 = document.querySelector(".input-two").value;
    let result = document.querySelector(".message").value;
    let lightblue = document.querySelector(".lightblue");
    let red = document.querySelector(".red");
    let black = document.querySelector(".black");
    let pink = document.querySelector(".pink");
    console.log(input1);
    console.log(input2);
    if (input1 < 5 && input2 === "sunny") {
        document.querySelector(".result").innerHTML = "Since you have " + input1 + " of your happy level " + "and you prefer " + input2 + ", you must be light blue.";
        lightblue.style.display = "block";
    } else if (input1 >= 5 && input2 === "sunny") {
        red.style.display = "block";
        document.querySelector(".result").innerHTML = "Since you have " + input1 + " of your happy level " + "and you prefer " + input2 + ", you must be red.";
    } else if (input1 < 5 && input2 === "rainy") {
        black.style.display = "block";
        document.querySelector(".result").innerHTML = "Since you have " + input1 + " of your happy level " + "and you prefer " + input2 + ", you must be black.";
    } else if (input1 >= 5 && input2 === "rainy") {
        pink.style.display = "block";
        document.querySelector(".result").innerHTML = "Since you have " + input1 + " of your happy level " + "and you prefer " + input2 + ", you must be pink.";
    }
};