//use moment to take the current date in the format "Day Name", "Day of Month" "Month"
// and stores it in the variable now
var now = moment().format("dddd, Do MMMM");

//updates HTML elemtent with variable "now"
$('#currentDay').text(now);

//stores the current hour as a number (1am = 1, 8pm = 20 etc.)
var hour = moment().format('H');

//convers the hour to an int value
hour = hour*1

//below function changes the class of the <textareas> in the HTML
//this is so the current, future and past times can have specific formatting as defined the thier class and css
function setTense() {

    //iterates through each html element with a class of row
    $('.row').each(function(i, obj) {

        //if the id of the current element is less than the hour i.e. in the past
        //therefore change the class of the textarea element to "past"
        //this is using the initial class of the textarea whihc is always "future"

        if ($(obj).attr('id') < hour) {
            $(this).children(".future" ).removeClass().addClass('past');
        } 
        
        //if the id of the current element is equal to the hour i.e. the present hour
        //therefore change the class of the textarea element to "present"
        
        else if ($(obj).attr('id') == hour) {
            $(this).children(".future" ).removeClass().addClass('present');
        } 
        
        //else current element must be in the future
        //therefore change the class of the textarea element to "future"

        else {
            $(this).children(".future" ).removeClass().addClass('future');
        }

    });
}