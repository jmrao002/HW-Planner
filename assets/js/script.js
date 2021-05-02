// Define day using Moment
let today = moment();
// Set date at top of page
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

function saveTask() {
  //get stuff user put in textarea
  $(".saveBtn").on("click", function () {
    let saveHour = $(".saveBtn").parent().attr("data-time");
    console.log(saveHour);
    let saveText = $(".saveBtn").parent().find("textarea").val();
    //save that to localstorage
    localStorage.setItem(saveHour, saveText);
  });
  //show message to user

  //hide message after so many seconds

  // function to show the task on the screen
  showTask();
  // update row color using below function
  updateRowColor();
}

function showTask() {
  $(".time-block").each(function () {
    let showHour = $(this).attr("data-time");
    let showText = localStorage.getItem(showHour);
    $(this).find("textarea").val(showText);
  });
}

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
saveTask();
