# work-day-scheduler
Week 05 Homework - simple calendar application that allows a user to save events for each hour of the day.



//To do:
- Add current day at top of calendar
- Add timeblocks for standard business hours (9-5)
- Change colour of block to show past/present/future
- Make timeblocks text areas for user input
- Add save/submit button
- Take users input, save to local storage, and save/print user input on timeblock
- Add link and screenshot of live site

user input - local storage - to do:
- create variable to link to input element in HTML
- create a function to add users input to local storage on button click



// Created a variable in js to link to the currentDay in the HTML DOM

// Created a function to use moment.js to display the current day and date in currentDayEl. Used the format dddd, Do MMMM to show Saturday, 27th March. Used .append() to insert this text into the HTML.

// Adding timeblocks in [a index.html](index.html) using bootstrap rows and cols

//Create a function to change the colours of the hours as they pass
- Create variable currentTime to hold the current hour using moment.js in the HH format - to match the format of the numbers in the time-block ids.
- Create a variable to link to the time-block elements in the HTML DOM
- Create a function to parseInt() the numbers in the ids and return them as integers rather than strings - using .each to ensure it runs for EACH id not just the first.
- Using an IF statement to check if the current time matches the number in the id name (hourEl) - IF they are equal ===, chang the background colour to #E5C8ED (by using a $(this) and DOM traversal - .children('.description), and adding the class "present" that was defined in [a style.css](./assets/css/style.css) to show the current time. IF they aren't equal, but the hourEl number is higher than the currentTime number, change the bg colour to show that the hour is in the future. IF neither of the previous conditionals prove to be true, then the hourEl number must be lower than the currentTime, so change the bg colour to show the time has passed. 

- Changed the '.description' divs in [a index.html](index.html) to input tags (type="text") to allow for user input and removed the border.

//Created an event listener for "click" on any/all of the save buttons.
//When the save button is clicked:
- prevent default refresh
- create a variable called eventName to hold the users input value (name of event)
- create a variable called timeOfEvent to hold the time of the event
- console log these values
- create a local storage item with the key using the value from timeOfEvent (meaning each hour gets a different storage item) and the value using the text from the eventName.
- Console log: "You have successfully saved the event " + eventName + " at " + timeOfEvent

//Created a for loop to print saved events to DOM
-