//variable linking to the currentDay in the HTML DOM
var currentDayEl = $("#currentDay");
//variable holding the current day and date using moment.js
var currentDay = moment().format("dddd, Do MMMM");
//variable to hold the current hour in HH format (09, 10, etc.) - using parseInt to convert to integer
var currentTime = parseInt(moment().format("HH"));
//variable to link to the time-block element
var timeBlockEl = $(".time-block");

//variable to link to all save buttons
var saveBtn = $(":button");
//variable for input
var descrInputEl = $("input").val();


//function using moment.js to display the current day/date in the jumotron
function displayDay() {
    currentDayEl.append(currentDay);
    console.log("Today is " + currentDay);
}

//calling displayDay function
displayDay();

//function to change colours of hours as they pass

function checkTime() {

    timeBlockEl.each(function () {

        console.log("The current hour is: " + currentTime);
        //variable to hold the number of the id
        var hourEl = parseInt($(this).attr('id'))
        // console.log(hourEl);

        //if statement to see if the currentTime matches the id (is the current time), is in the future or in the past
        if (hourEl === currentTime) {
            console.log(hourEl === currentTime)
            //changing background colour if time is current time
            $(this).children('.description').addClass('present');
        } else if (hourEl > currentTime) {
            //changing colour if time is in the future
            $(this).children('.description').addClass('future');
        } else {
            //changing colour if time as passed
            $(this).children('.description').addClass('past');
        }
    })
}

checkTime();





//storing user input

saveBtn.on("click", function storeEvent(event) {
    event.preventDefault(event);

    // timeBlockEl.each(function (){})

    var eventName = $(this).siblings('.description').val();
    var timeOfEvent = $(this).parent().attr('id');

    console.log("Name of event: " + eventName);
    console.log("Time of event: " + timeOfEvent);

    //creating local storage with a key called "event" and the value of the user input
    localStorage.setItem(timeOfEvent, eventName);

    console.log("You have successfully saved the event " + eventName + " at " + timeOfEvent);
});




// //event listener for save
// saveBtn.on("click", storeEvent);