function scheduler() {
  //get stuff user put in textarea
  $(".saveBtn").on("click", function () {
    let saveHour = $(this).parent().attr("data-time");
    let saveText = $(this).parent().find("textarea").val();
    //save that to localstorage
    localStorage.setItem(saveHour, saveText);
  });
  //show message to user

  //hide message after so many seconds

  // function to show the task on the screen
  showTask();
  // function to show time and update every second
  renderTime();
  setInterval(renderTime, 1000);
  // function to set row colors and update every second
  updateRowColor();
  setInterval(updateRowColor, 1000);
}

function showTask() {
  $(".time-block").each(function () {
    let showHour = $(this).attr("data-time");
    let showText = localStorage.getItem(showHour);
    $(this).find("textarea").val(showText);
  });
}

function renderTime() {
  // Define day using Moment
  let today = moment();
  // Set date at top of page
  $("#currentDayTime").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
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
scheduler();
