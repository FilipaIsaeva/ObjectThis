/**
 * file: js.js
 * purpose: objects in practise
 * with inspiration from: https://www.w3schools.com/js/js_this.asp
 **/

// Create an object:
let person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        fullName: function () {
            return this.firstName += " " + this.lastName;
        }
    }


    /*
    Note: the object is person. The object has properties, such e.g. firstName. The object also has a method, in this case fullName. The keyword "this" refers "to the owner object" (quote from W3 schools).
    */

    // Display data from the object:
    document.getElementById("demo").innerHTML =
    person.fullName();

// Display data from the object:

let myTown = {
        name: 'Vratsa',
        country: 'Bulgaria',
        image: "greenman.jpg",
        population: 60000,
        ImageTown: function () {
            return this.name + " " + this.image;
        },
        showImage: function () {
            return '<img src = "images/' + this.image + '" alt="Image">';
                + this.image +
                '" alt="Image">';
        }
    }

    let aa = document.getElementById("demo");

    aa.innerHTML += person.fullName();
    aa.innerHTML += '<br>' + myTown.ImageTown();
    aa.innerHTML += myTown.showImage();

    aa.onclick = myTown.showImage();

/* Alternative: call */

/*
The Call Method:
let person2 = {
  firstName:"John",
  lastName: "Doe",
}
person1.fullName.call(person2);  // Will return "John Doe"
*/

/* ---------- INSTANCE ---------- */

/*

function Course(name, gradingareas, finalgrade) {
    this.name = name;
    this.gradingareas = gradingareas;
    this.finalgrade = finalgrade;
}

var course1 = new Course("CS1500", "Js", 85);
var course2 = new Course("CS1600", "Whot", 99);
console.log(course2.name); // CS1600

*/
