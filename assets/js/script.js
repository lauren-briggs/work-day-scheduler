var currentDayEl = $("#currentDay");


//function using moment.js to display the current day/date in the jumotron
function displayDay() {
    var currentDay = moment().format("dddd, Do MMMM");
    currentDayEl.append(currentDay);
    console.log(currentDay);
}

//calling display day function
displayDay();