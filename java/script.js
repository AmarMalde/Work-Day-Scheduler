
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

//calls the function so it runs when the webpage loads
setTense();


//below codeblock will save the text in each <textarea> to the local storage 
//it will save the text to the parent elements id
//e.g. the first textarea's parent has an id of 9

//whenever an element with a class of saveBtn is clicked run the function
//all the save buttons have a class of saveBtn

$('.saveBtn').on('click', function() {

    //save the text in the textarea as textArea
    var textArea = $(this).parent().children().eq(1).val();

    //and save the id of the parent of textarea
    var textareaID = $(this).parent().attr('id');

    //stores the textarea text as the id of parent element in the local storage
    window.localStorage.setItem(textareaID, JSON.stringify(textArea));
})

//below function updates the textareas with data from local storage

function updatedText() {

    //for each element with the class of row - which is the parent element(s) of the text areas
    $('.row').each(function(i, obj) {
    
        // get the id of the current ID of the object (which is the parent of a textarea)
        var textareaID = $(obj).attr('id');

        // use textareaID to get the textarea's text from the local storage
        text = JSON.parse(window.localStorage.getItem(textareaID));

        //update the textarea (child of obj) with text
        $(obj).children().eq(1).val(text)

    });

}

//run function so it runs when the page is loaded
updatedText()