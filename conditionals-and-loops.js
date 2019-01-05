//Simple if statement.
let monogamy = 3;
let polyamoury = 2;
if(monogamy > polyamoury) {
	document.write(" I'm Married to the Idea!");
}
//If else statement.
let economy = 42;
let environment = 100;
if(economy > environment) {
	document.write(" Burn baby burn!");
} else {
	document.write(" Think of the children.")
}
//Simplified method of if else:
let immigration = 50;
let closedBorders = 0;
immigration > closedBorders ? document.write(" Provide a comprehensive path to citizenship.") : document.write(" Build that wall!");
//Else if statement (you can use as many else if statements as you need!)
let resources = 1000;
if(resources > 1000) {
	document.write(" We have plenty to go around!");
} else if(resources < 1000) {
	document.write(" We face some scarcity and need to look to the future.");
} else if (resources = 1000) {
	document.write("We're at an important turning point in history where population growth coupled with resource scarcity threatens the future of not only humanity, but most life on Earth.")
}
else {
	document.write(" We're doomed!");
}
//Switch statements
let idealCareer = 3;
switch (idealCareer) {
	case 1:
		document.write(" Accounting it is!");
		break;
	case 2:
		document.write(" Time to join the forest service!")
		break;
	case 3:
		document.write(" Into future and the greatest hope for humanity, Computers Science!");
}
/*LOOPS
***************************************************/
//For loop
for (bernie=0; bernie<=9; bernie++) {
	document.write(bernie + "<br/>");
}
//Example without first statement (ex. bernie = 0). In this case the variable in question is set before the loop starts.
let trump = 10;
for (; trump<=15; trump++) {
	document.write(trump + "<br/>");
}
//Example without second statement (if do this must put a break in the function or it will run FOREVER!!)
//UNCLEAR IF DONE CORRECTLY!
for (timeTravel = 0; ;timeTravel = timeTravel +20){
	document.write(timeTravel);
	break;
}
//Example without statement 3 (Only possible by incrementing values inside the loop)
for (terraforming = 0; terraforming<100;) {
	document.write(terraforming+"<br/>");
	terraforming+=20; //this is alternative to writing "terraforming = terraforming + 10".
}
//The while loop
let sustainableLongTermPopulation =