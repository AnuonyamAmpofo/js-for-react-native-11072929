# js-for-react-native-11072929

# Explanation of tasks

1. Task 1
Created a Javascript file called arrayManipulation.js which contained a function processArray that takes an array of numbers as an argument and returns a new array where each even number is squared and each odd number is tripled. 
I used the .map() method to achieve this.

2.  Task 2
I added a function formatArrayString that takes 2 arrays as arguments.
The first array is a string while the second is an array of numbers processed by the processArray function created earlier. 
This function puts the entire string in uppercase if the corresponding number in the processArray is even and Lowercase if it is odd.
I used the .map() method for this as well.
I also exported the formatArrayString.

3. Task 3
I created a userInfo.js file and imported the formatArrayString function from the arrayManipulation.js file.
I created the createUserProfiles function that taks an array of names and array of modified names from the second task and returned an array of objects which each contained originalName, modifiedName and id which increases from 1 upwards.
I decleard the currentId =1 before writing the function and storing the value of the currentId in a variable 'id'.

This was done with the Visual Studio Code IDE.
