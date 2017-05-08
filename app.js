//this is gathering the constuctor to build a basic flashcard showing front and back
var basic = require("./BasicCard.js");
//this is gathering the constructor to build a cloze flash card
var cloze = require("./cloze-card.js")


//information being added to the sytem to creat a basic flashcard..
var comic = new basic("What is batman's real name","Bruce Wayne");
var geography = new basic("What State is the city Albany located?","New York");
var sports = new basic("Who won the Stanley Cup in 1994?", "New York Rangers");


//cloze section. this creates a cloze flashcard. the first perameter is the missing part the second parameter is what is shown the the user first
var dolphin = new cloze("Smell", "is one of the traditional 5 senses Dolphins are believed not to possess");
var movie= new cloze("A brain", "is what the scarcrow wanted from the wizard in the Wizard of Oz");



//this is calling the new basic cards that were made 
comic.printStats();
geography.printStats();
sports.printStats();


//this is calling the new cloze-cards that were created
dolphin.printStats();
movie.printStats();



