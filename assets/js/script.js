// Define day and hour using Moment
let today = moment();

// Set date at top of page
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

function saveTask() {
  // update row color using below function
  updateRowColor();
  // keeps row color up to date every minute
  setInterval(updateRowColor, 60000);
  //get stuff user put in textarea
  $(".saveBtn").on("click", function () {
    let blockHour = $(this).parent().attr("data-time");
    let textEntry = $(this).parent().find("textarea").val();
    //save that to localstorage
    localStorage.setItem(blockHour, textEntry);
  });

  //show message to user
  //hide message after so many seconds
}
// user clicks save button
// $(".saveBtn").on("click", saveTask);

function updateRowColor() {
  // set variable to current hour
  let currentHour = moment().hour();
  // loop over each row of the class (time-block)
  $(".time-block").each(function () {
    let blockHour = $(this).attr("data-time");
    // add classes for color changes
    if (currentHour > blockHour) {
      $(this).addClass("past");
    } else if (currentHour < blockHour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

// // might wrap app in this function, but we'll see //5/1/21
// $(document).ready(function () {});
