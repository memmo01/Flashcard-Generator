var clozeCard= function(cloze,text){
    this.cloze= cloze;
    this.text= text;    
    this.fulltext=(this.cloze + " "+this.text);
}

var dolphin = new clozeCard("Smell", "is one of the traditional 5 senses Dolphins are believed not to possess");
var movie= new clozeCard("A brain", "is what the scarcrow wanted from the wizard in the Wizard of Oz");
console.log(dolphin.text);
console.log("-----------");
console.log(dolphin.cloze);
console.log("------------");
console.log(dolphin.fulltext);
console.log("_____________");

console.log(movie.text);
console.log("------------");
console.log(movie.cloze);
console.log("------------");
console.log(movie.fulltext);

