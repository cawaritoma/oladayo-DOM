//window.location.href = "index2.html";

// F 0 - 39
// D 40 - 49
// C 50 - 59
// B 60 - 69
// A 70 - 100

var examScore = 100000;

if (examScore >= 70 && examScore <= 100){
    document.write("You got an A: " + examScore);
}
else if(examScore >= 60 && examScore <= 69){
    document.write("You got a B: " + examScore);
}
else if(examScore >= 50 && examScore <= 59){
    document.write("You got a C: " + examScore);
}
else if(examScore >= 40 && examScore <= 49){
    document.write("You got a D: " + examScore);
}
else if(examScore >= 0 && examScore <= 39){
    document.write("You got a F: " + examScore);
}
else{
  //  document.write("Invalid Exam Score" + "<br>");
}



function addition(num1, num2, num3, number4){
    document.write("Add: " + (num1 + num2 + num3 + number4) + "<br>");
}

//addition(3, 5, 6, 10);
//addition(1, 2, 3, 4);


// A = 20
// B = 26
// H = 15
// The area of the trapezium is 345

function trapezium(A, B, h) {
    document.write("Area of the Trapezium is: " + (A + B) / 2 * h + "<br>");
}

//trapezium(20, 26, 15);



function breakFast(lunch) {
    document.write("Ogi and Akara<br>");
    lunch();
}

function lunch() {
    document.write("Bread and Butter<br>");
}

//breakFast(lunch);



var movieList = {
    "movie1": "Endgame",
    'movie2': 'Birdbox',
    'movie3': 'Alita',
    'movie4': 'Captain Marvel',
    'movie5': 'Hobbs & Shaw',
    'movie6': 'John Wick',
    'year': 2019,
    'bool': true,
    'interesting': false,
    'rating': null
};
movieList.movie7 = 'GOT S8';
movieList.actor = 'John Doe';

console.log(movieList);
//document.write(movieList.movie5 + "<br>");
// console.log(movieList.movie4);
// console.log(movieList.movie6);


var countingNumbers = [{'one': 1, 'two': 2}, {'three': 3, 'four': 4}];
console.log(countingNumbers[1].four);
console.log(countingNumbers[0].two);


var lorem = document.getElementById("lorem");
lorem.style.backgroundColor = "green";
lorem.style.fontSize = "20px";
lorem.innerHTML = "Hello, How are you doing?";


var bio = document.getElementsByClassName("bio");
bio[0].innerHTML = "Name: James Bond";
bio[0].style.color = "white";
bio[1].style.backgroundColor = "purple";
bio[1].style.color = "white";

var loremSelector = document.querySelector("#lorem");
loremSelector.style.backgroundColor = "lightgreen";


var bioSelector = document.querySelectorAll(".bio");
bioSelector[0].style.backgroundColor = "blue";

// var day = 1231312;
//
// if (day == "morning"){
//     alert("Good morning");
// }
// else if (day == "afternoon"){
//     alert("Good Afternoon");
// }
// else if (day == "evening"){
//     alert("Good Evening")
// }
// else{
//     alert("Cannot get time of the day");
// }

// var deleteConfirmation = confirm("Are you sure you want to delete?");
//
// console.log(deleteConfirmation);
// if(deleteConfirmation == true){
//     alert("File deleted");
// }
// else if (deleteConfirmation == false){
//     alert("No action taken");
// }


var counter = 0;

function name() {
    document.write("James Bond" + "<br>");
    document.write(counter + "<br>");
    if (counter == 5){
        clearInterval(interval);
    }
    counter++;
}

//setTimeout(name, 5000);
//var interval = setInterval(name, 2000);






