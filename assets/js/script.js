//variable linking to the currentDay in the HTML DOM
var currentDayEl = $("#currentDay");
//variable holding the current day and date using moment.js
var currentDay = moment().format("dddd, Do MMMM");
//variable to hold the current hour in HH format (09, 10, etc.) - using parseInt to convert to integer
var currentTime = parseInt(moment().format("HH"));
//variable to link to the time-block element
var timeBlockEl = $(".time-block");

//function using moment.js to display the current day/date in the jumotron
function displayDay() {
    currentDayEl.append(currentDay);
    console.log(currentDay);
}

//calling display day function
displayDay();

//function to change colours of hours as they pass

function checkTime() {

    timeBlockEl.each(function () {

        console.log(currentTime);
        //variable to hold the number of the id
        var hourEl = parseInt($(this).attr('id'))
        console.log(hourEl);

        //if statement to see if the currentTime matches the id (is the current time), is in the future or in the past
        if (hourEl === currentTime) {
            console.log(hourEl === currentTime)
            //changing background colour if time is current time
            $(this).children('.description').addClass('present');
            console.log(this.children);
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