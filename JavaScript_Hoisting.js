1
// Given
console.log(hello);                                   
var hello = 'world';                                 
// AFTER HOISTING BY THE INTERPRETER
var hello;
console.log(hello); // logs undefined
hello = "world";

2
// Given
var needle = 'haystack';
test();
function test(){
  var needle = 'magnet';
  console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER
var needle = 'haystack';
function test(){   
  var needle = 'magnet';
  console.log(needle);   //logs magnet
}
test();

3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);  //logs super cool

4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER
var food = 'chicken';
console.log(food);  //logs chicken
function eat(){
    food = 'half-chicken';
    console.log(food);  //logs half-chicken
    var food = 'gone';
}
eat();


5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// AFTER HOISTING BY THE INTERPRETER
var mean;
mean();  //mean is not a function error
mean = function() {  
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
console.log(food);

6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
var genre;
console.log(genre);  //logs undefined
genre = "disco";
function rewind() {
    genre = "rock";
    console.log(genre);  //logs rock
    var genre = "r&b";
    console.log(genre);  //logs r&b
}
rewind();
console.log(genre);  //logs disco

7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
dojo = "san jose";
console.log(dojo); //logs san jose
function learn() {
    dojo = "seattle";  //logs seattle
    console.log(dojo);
    var dojo = "burbank";  //logs burbank
    console.log(dojo);
}
learn();
console.log(dojo);  //logs san jose

8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// AFTER HOISTING BY THE INTERPRETER
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));  // logs { name: 'Chicago', students: 65, hiring: true }
console.log(makeDojo("Berkeley", 0)); // error at dojo = “closed for now”


















