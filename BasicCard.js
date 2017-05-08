basic = function(front, back){
    this.front = front;
    this.back = back;

}

var comic = new basic("What is batman's real name","Bruce Wayne");
var geography = new basic("What State is the city Albany located?","New York");
var sports = new basic("Who won the Stanley Cup in 1994?", "New York Rangers");



console.log(comic.front);
console.log("-------");
console.log (comic.back);
console.log("-------");
console.log("-------");
console.log(geography.front);
console.log("-------");
console.log(geography.back);
console.log("-------");
console.log("-------");
console.log(sports.front);
console.log("-------");
console.log(sports.back);