//use moment to take the current date in the format "Day Name", "Day of Month" "Month"
// and stores it in the variable now
var now = moment().format("dddd, Do MMMM");

//updates HTML elemtent with variable "now"
$('#currentDay').text(now);
