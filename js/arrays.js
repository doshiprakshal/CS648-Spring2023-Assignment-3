//1. Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
window.console.log("Question No: 1");
var five_favourite_movies = ["Battleship", "Gravity", "Interstellar", "Inception", "Dunkirk"];
window.console.log(five_favourite_movies[1]);

//2. Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
window.console.log("Question No: 2");
var movies = new Array(5);
movies[0] = "Battleship";
movies[1] = "Gravity";
movies[2] = "Interstellar";
movies[3] = "Inception";
movies[4] = "Dunkirk";
window.console.log(movies[0])

// 3. Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
window.console.log("Question No: 3");
var movies = new Array(5);
window.console.log("Original lenght of array is: ",movies.length)
movies[0] = "Battleship";
movies[1] = "Gravity";
movies[2] = "Interstellar";
movies[3] = "Inception";
movies[4] = "Dunkirk";
movies.splice(2,0,"Bullet Train");
window.console.log(movies);
window.console.log("6th movie added. The length of new array is: ",movies.length);

// 4. Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
window.console.log("Question No: 4");

var movies = [];
movies[0] = "Battleship";
movies[1] = "Gravity";
movies[2] = "Interstellar";
movies[3] = "Inception";
movies[4] = "Dunkirk";
delete movies[0]
window.console.log(movies)

//5. Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for/in loop to iterate through the array and display each movie within the console window.
window.console.log("Question No: 5");

var movies = [];
movies[0] = "Battleship";
movies[1] = "Gravity";
movies[2] = "Interstellar";
movies[3] = "Inception";
movies[4] = "Dunkirk";
movies[5] = "Top Gun";
movies[6] = "Arrival";
for (var index in movies) {
    window.console.log(movies[index]);
}

//6. Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.
window.console.log("Question No: 6");

var movies = [];
movies[0] = "Battleship";
movies[1] = "Gravity";
movies[2] = "Interstellar";
movies[3] = "Inception";
movies[4] = "Dunkirk";
movies[5] = "Top Gun";
movies[6] = "Arrival";
for (var mov of movies) {
    window.console.log(mov);
}

//7. Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.
window.console.log("Question No: 7");

var movies = [];
movies[0] = "Battleship";
movies[1] = "Gravity";
movies[2] = "Interstellar";
movies[3] = "Inception";
movies[4] = "Dunkirk";
movies[5] = "Top Gun";
movies[6] = "Arrival";
for (var mov of movies.sort()) {
    window.console.log(mov);
}

//8. Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
window.console.log("Question No: 8");

var movies = [];
var leastFavMovies = [];
movies[0] = "Battleship";
movies[1] = "Gravity";
movies[2] = "Interstellar";
movies[3] = "Inception";
movies[4] = "Dunkirk";
movies[5] = "Top Gun";
movies[6] = "Arrival";

leastFavMovies[0] = "La la land";
leastFavMovies[1] = "The Dictator";
leastFavMovies[2] = "Conjuring";

window.console.log("Movies I like: \n\n");
for (var index in movies) {
    window.console.log(movies[index]+"\n");
}

window.console.log("\n");

console.log("Movies I regret watching: \n\n")
for (var index in leastFavMovies) {
    window.console.log(leastFavMovies[index]+"\n");
}

//9. Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted
window.console.log("Question No: 9");

movies = movies.concat(leastFavMovies);
window.console.log(movies.sort().reverse());

//10. Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
window.console.log("Question No: 10");

window.console.log("Last element: ",movies.pop())

//11. Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.
window.console.log("Question No: 11");

window.console.log("First element: ",movies.shift())

//12. Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like.

// Using movies variables declared above.
window.console.log("Question No: 12");

var indices_of_movies = [];

movies.forEach((movie, index) => {
  if (leastFavMovies.includes(movie)) {
    indices_of_movies.push(index); }
});

var goodMovies = ["Fury","American Sniper","Zero Dark Thirty"]

indices_of_movies.forEach((index) => {
    movies[index] = goodMovies.shift();
});

for (var index = 0; index < movies.length; index++) {
    "use strict";
    window.console.log(movies[index] );
}
window.console.log("\n");


/* 13. Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this:

movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];

Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type. */
window.console.log("Question No: 13");

var movies = [["Inception", 1], ["American Sniper", 2], ["Battleship", 3], ["Dunkirk", 4], ["Arrival", 5]];

var name_of_movies = movies.filter(function(movie) {
  return typeof movie[0] === "string";
});

window.console.log(name_of_movies.map(movie => movie[0]));


/*14. Create a string array called employees using literal notation and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:

Employees:

ZAK
JESSICA
MARK
FRED
SALLY
*/

window.console.log("Question No: 14");

var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

var showEmployee = function(employees) {
  window.console.log("Employees: ");
  window.console.log("\n"); 
  employees.forEach(function(employee) {
    window.console.log(employee);
  });
};

showEmployee(employees);


/*15. Write a JavaScript function to filter false, null, 0 and blank values from an array.
Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
Expected Result: [58, "abcd", true] */
window.console.log("Question No: 15");

var values = [58, '', 'abcd', true, null, false, 0];

var filter_values = function(values){
    return values.filter(function(v) {
  return v !== false && v !== null && v !== 0  && v !== "";
});
};

window.console.log(filter_values([58, '', 'abcd', true, null, false, 0]));


//16. Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.
window.console.log("Question No: 16");

var random_number = function(val) {
    return val[Math.floor(Math.random() * val.length)];
  };
  var nums = [25, 20, 16, 48, 54, 66, 17, 32, 99, 71];
  window.console.log(random_number(nums));


//17. Write a JavaScript function to get the largest number from a numeric array.
window.console.log("Question No: 17");

var largest_number = function(val){
    return Math.max(...val);
}

var num_array = [74 , 23, 56 , 81 , 98 ,60 , 147 ];
window.console.log(largest_number(num_array));