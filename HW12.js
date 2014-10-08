// use EACH the iteration methods discussed in class today (for loop, Array.forEach, custom forEach) for EACH of the following problems
// 1. calculate the sum of numbers (can be any number of arguments)
// 
// for loop
function sumForLoop(){
    var args = Array.prototype.slice.apply(arguments, []),
        sum = 0;
    for(var i = 0; i < args.length; i++){
        sum += args[i];
    }
    return sum;
}
console.log(sumForLoop(1,2,3));

// Array.forEach
function sumForEach(){
    var args = Array.prototype.slice.apply(arguments, []),
        sum = 0;
    args.forEach(function(num){ sum += num; });
    return sum;
}
console.log(sumForEach(1,2,3,4));

// custom forEach
function sumForEachCustom(){
    var args = Array.prototype.slice.apply(arguments, []),
        sum = 0;
    forEach(args, function(){ sum += arguments[0]; });
    return sum;
}

function forEach(array, callback){
    for(var i = 0; i < array.length; i++){
        callback(array[i], i);
    }
}
Array.prototype.forEach = function(callback){
    for(var i = 0; i < this.length; i++){
        callback(array[i], i);
    }
}
console.log(sumForEachCustom(1,2,3,4,5));

// 
// 2. calculate the average of numbers

// for loop
function avgForLoop(){
    var args = Array.prototype.slice.apply(arguments, []),
        sum = 0;
    for(var i = 0; i < args.length; i++){
        sum += args[i];
    }
    var avg = sum / args.length;
    return avg;
}
console.log(avgForLoop(1,2,3));

// Array.forEach
function avgForEach(){
    var args = Array.prototype.slice.apply(arguments, []),
        sum = 0;
    args.forEach(function(num){ 
    	sum += num;
    });
    var avg = sum / args.length;
    return avg;
}
console.log(avgForEach(1,2,3,4));


// // custom forEach
function avgForEachCustom(){
    var args = Array.prototype.slice.apply(arguments, []),
        sum = 0;
    forEach(args, function(){ sum += arguments[0]; });
    var avg = sum /args.length;
    return avg;
}
function forEach(array, callback){
    for(var i = 0; i < array.length; i++){
        callback(array[i], i);
    }
}
Array.prototype.forEach = function(callback){
    for(var i = 0; i < this.length; i++){
        callback(array[i], i);
    }
}
console.log(avgForEachCustom(1,2,3,4,5));

// 3. find the largest number of the inputs
// for loop
function largeForLoop(){
    var args = Array.prototype.slice.apply(arguments, []),
        largestNum = 0;
    for(var i = 0; i < args.length; i++){
    	if (args[i] > largestNum) {
    		largestNum = args[i];
    	}
    }
    return largestNum;

}
console.log(largeForLoop(1,2,26,3));

// forEach
function largeForEach(){
    var args = Array.prototype.slice.apply(arguments, []),
        largestNum = 0;
    args.forEach(function(x){
   		if (args[x] > largestNum) {
    		largestNum = args[x];
    	}
    });
    return largestNum;
}
console.log(largeForEach(1,2,3,4));

// custom forEach
function largeForEachCustom(){
    var args = Array.prototype.slice.apply(arguments, []),
        largestNum = 0;
    forEach(args, function(){ 
    	// Why arguments[0], is it because 0 denotes the first item in an array?  Using aruguments[1] does not start you off at the second array item.
    	if (arguments[0] > largestNum) {
    		largestNum = arguments[0];
    	}
    });
    return largestNum;
}
function forEach(array, callback){
    for(var i = 0; i < array.length; i++){
        callback(array[i], i);
    }
}
Array.prototype.forEach = function(callback){
    for(var i = 0; i < this.length; i++){
        callback(array[i], i);
    }
}
console.log(largeForEachCustom(9,2,3,4,5));

// 
// 
// 4. find the longest string of the inputs


// for loop
function longestForLoop(){
    var args = Array.prototype.slice.apply(arguments, []),
        longest = "";
    for(var i = 0; i < args.length; i++){
    	if (args[i].length > longest.length) {
    		longest = args[i];
    	}
    }
    return longest;
}
console.log(longestForLoop("Houston","Austin","Dallas", "San Antonio"));

// forEach
function longestForEach(){
    var args = Array.prototype.slice.apply(arguments, []),
        longest = "";
    args.forEach(function(x){
   		if (x.length > longest.length) {
    		longest = x;
    	}
    });
    return longest;
}
console.log(longestForEach("Norris","Natalie","Van","Diem"));

// custom forEach
function longestForEachCustom(){
    var args = Array.prototype.slice.apply(arguments, []),
        longest = "";
    forEach(args, function(){ 
    	if (arguments[0].length > longest.length) {
    		longest = arguments[0];
    	}
    });
    return longest;
}
function forEach(array, callback){
    for(var i = 0; i < array.length; i++){
        callback(array[i], i);
    }
}
Array.prototype.forEach = function(callback){
    for(var i = 0; i < this.length; i++){
        callback(array[i], i);
    }
}
console.log(longestForEachCustom("Apple","Banana","Grape","Strawberry"));

// 
// 
// 
// 
// 5. given an array of Date() objects (Oct 4th 2014, Oct 3rd 2014, Sept 30th 2014, Sept 1st 2012, March 13th 2010), in that order, sort them chronologically. Use http://devdocs.io/javascript/global_objects/date for reference on creating Date() objects with a specific date.





// set up arrays
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];

var customers = [
    { firstname : 'Joe', lastname : 'Blogs'},
    { firstname : 'Jab', lastname : 'Zmith'},
    { firstname : 'Dave', lastname : 'Jones'},
    { firstname : 'Jack', lastname : 'White'}
];

// console.log(customers[0].firstname);

// YOUR CODE WILL GO IN THIS NEXT SECTION
// find all customers whose firstname starts with 'J',
// map() those people into an array of objects like: { name : "firstname c.lastname" }
// then sort alphabetically

var projections = customers
    .filter(function(c){ 
		if ( c.firstname.charAt(0) == 'J') {
			return c;
		}
     })
    .map(function(c){
    	return c.firstname + " " + c.lastname;
    })


// SORT STILL NEEDS WORK
    .sort(sortByName);
    
function sortByName(c1, c2) {
    "use strict";
    if(c1.firstname < c2.firstname) return -1;
    if(c1.firstname > c2.firstname) return 1;
    return 1
    return 0

}

console.log(projections);
