$(document).ready(function () {
  // all your code goes here
  function saveTask() {
    //get stuff user put in textarea
    //save that to localstorage
    //show message to user
    //hide message after so many seconds
  }
  // user clicks save button
  $(".saveBtn").on("click", saveTask);
  function updateRowColor() {
    // set variable to current hour
    // loop over each row of the class (time-block)
    // find row time using data attribute (9 < 21)
    // add the past class to $(this).addClass('past');
  }
  // color rows based on time of day
  // use interval to update row color
  updateRowColor();
  // load data from local storage and put it in the correct row
  // #hour9 textarea to value of locaalstorage key number 'hour-9'
  // #hour10 textarea to value of locaalstorage key number 'hour-10'
  // display current date on the page - moment (get document by id)
});
