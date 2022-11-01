//Set variables to use in functions
var container = document.querySelector(".container")
var blocks = [7,8,9,10,11,12,13,14,15,16,17,18,19]
var date = new Date();

$(document).ready(function () {
    var today = moment();

    $("#currentDay").text(today.format("[Don't forget, today is] dddd MMM Do, YYYY [and the time is] h:mm a"));
    
    $('.saveBtn').on('click', function () {
    var scheduledEvent = $(this).siblings(".descritpion").val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time,scheduledEvent);
    });
});

//cross check if it is current hour
function isCurrentPastOrFuture(hour) {
    if (date.getHours() == hour) {
        return 1
        //if it is past current hour
    } else if (date.getHours() > hour) {
        return 2
        //if it is before current hour
    } else {
        return 3
    }
    //updates time every 30 seconds
setInterval(timeUpdater, 30000)
//function to run time update
function timeUpdater() {
    timeUpdater();
}
}



//take the length of the blocks Var and for every entry create what is stated below
for (var i=0; i < blocks.length; i++ ) {
    //setting a var that creates a div block for every number in blocks
    var wrapper = document.createElement("div");
    //linking css attributes to wrapper 
    wrapper.setAttribute("class", "row timeblock");
    if (isCurrentPastOrFuture(blocks[i]) == 1) {
        //setting a speciel attribute to any block that is current time
        wrapper.classList.add("present");
    } else if (isCurrentPastOrFuture(blocks[i]) == 2) {
        wrapper.classList.add("past");
    } else {
        wrapper.classList.add("future");
    };
    //setting a var that creates a div block for every entry in blocks
    var block = document.createElement("div");
    //setting a var that creates a textarea for every entry in blocks
    var textbox = document.createElement('textarea');
    
    //create button
    var button = document.createElement("button")
    //link css attributes to button
    button.setAttribute("class", "saveBtn col-md-1")
    //linking css attributes to textbox
    textbox.setAttribute("class", "description col-md-10");
    //linking css attributes to block
    block.setAttribute("class", "hour");
    //taking the blocks entry and converting to stander 12 hours time
    block.textContent = moment(blocks[i], 'HH').format('h a');
    




    //attaching block to container 
    container.appendChild(button)
    //attaching block to wrapper var
    wrapper.appendChild(block);
    //attaching text box wrapper
    wrapper.appendChild(textbox);
    //attaching wrapper (that contains the block and textbox) to the container in HTML
    container.appendChild(wrapper);
}

$('.saveBtn').on('click', function () {

    var scheduledEvent = $(this).siblings(".textarea")
})

