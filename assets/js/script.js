// global variables
const currentDayTimeEl = $("#currentDayTime");
let currentHour = moment().hour();

scheduler();

// function to set button action and run other functions on page
function scheduler() {
  $(".saveBtn").on("click", handleSave);
  $(".time-block").each(ManageBlock);
  // function to show time and update every second
  renderTime();
  setInterval(renderTime, 1000);
}

// function to combine task display and color change
function ManageBlock() {
  showTask(this);
  updateRowColor(this);
}

// function to show saved tasks on screen
function showTask(e) {
  let showHour = $(e).attr("data-time");
  let showText = localStorage.getItem(showHour);
  $(e).find("textarea").val(showText);
}

// function to set row colors
function updateRowColor(e) {
  let blockHour = parseInt($(e).attr("data-time"));
  // add classes for color changes
  if (currentHour > blockHour) {
    $(e).addClass("past");
  } else if (currentHour < blockHour) {
    $(e).addClass("future");
  } else {
    $(e).addClass("present");
  }
}

// function for current time
function renderTime() {
  const now = moment();
  // update colors when hour changes
  if (currentHour != now.hour()) {
    currentHour = now.hour();
    $(".time-block").each(ManageBlock);
  }
  // Set date at top of page
  currentDayTimeEl.text(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));
}

// function save data to local storage and handle icon animation
function handleSave() {
  let saveHour = $(this).parent().attr("data-time");
  let saveText = $(this).parent().find("textarea").val();
  //save that to localstorage
  localStorage.setItem(saveHour, saveText);
  const icon = $($(this).children()[0]);
  //show and hide saved message
  icon.removeClass("fa-save fas");
  icon.text("SAVED!");
  setTimeout(() => {
    icon.addClass("fa-save fas");
    icon.empty("SAVED!");
  }, 1000);
}
