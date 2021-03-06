/* Done in wednesday class:
1. What is a loop?
2. What is the syntax of a loop?
for(i = 0; i < 5; i++){
}
initializing: start
terminating: end
incrementing: space between
3. Give a few examples.
*/
// print "HTA rocks." 3 times */
for (i = 0; i < 3; i++)
{
    console.log("HTA rocks.");
}

// print even numbers */
for (i = 0; i < 11; i+2)
{
    console.log(i);
}

//4. Create a loop that prints numbers from 0-10.
for (i = 0; i < 11; i++)
{
    console.log(i);
}

//5. Create a loop that prints odd numbers from 1-9.
for (i = 1; i < 10; i = i+2)
{
    console.log(i);
}

//6. Create a loop that prints multiples of 3 from 3-15.
for (i = 3; i < 16; i = i+3)
{
    console.log(i);
}

//7. Create an array that lists 3 things you'd like to accomplish one day.
var accomplish = ["move", "become tattoo artist", "die"];

//8. Create a loop that prints out each of the things you'd like to accomplish listed in your #7 array.  The loop should print out three
//separate sentences, like this:
//One day, I'd like to _element 1_.
//One day, I'd like to _element 2_.
//One day, I'd like to _element 3_.
for (i = 0; i < accomplish.length; i++)
{
    console.log("One day, I'd like to " + accomplish[i] + ".");
}

//9. Create an array that lists 3 places you'd like to visit one day.
var visit = ["California", "Japan", "Spain"];

//10. Create a function (with a loop) that prints out each of the places you'd like to visit listed in your #9 array.  The function
//should print out three separate sentences, like this:
//One day, I'd like to go to _element 1_.
//One day, I'd like to go to _element 2_.
//One day, I'd like to go to _element 3_.
for (i = 0; i = visit.length; i++)
{
    console.log("One day, I'd like to go to " + visit[i] + ".");
}
