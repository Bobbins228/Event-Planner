document.getElementById('show-form').style.visibility = "hidden";
document.getElementById('delete-event').style.visibility = "hidden";
document.getElementById('update-event').style.visibility = "hidden";
document.getElementById('event-form').style.visibility = "hidden";
document.getElementById('event-form').style.visibility = "hidden";
var eventId = "";
var eventName = "";
var eventDate1 = "DATE";
var eventDate2 = "DATE";
var eventDescription = "";
var eventType = "";
var active_date = "";


$('#calendar').on('selectEvent', function(event, activeEvent) {
    document.getElementById('delete-event').style.visibility = "visible";
    document.getElementById('update-event').style.visibility = "visible";
    eventId = activeEvent.id
    eventName = activeEvent.name
    eventDate1 = activeEvent.date[0]
    eventDate2 = activeEvent.date[1]
    eventDescription = activeEvent.description
    eventType = activeEvent.type
});


function deleteEvent() {
    $('#calendar').evoCalendar('removeCalendarEvent', eventId);
    document.getElementById('delete-event').style.visibility = "hidden";
}

function showUpdateEvent() {
    document.getElementById('submit').style.visibility = "hidden";
    document.getElementById('submitUpdate').style.visibility = "visible";
    document.getElementById('event-form').style.visibility = "visible";
    document.getElementById("name").value = eventName
    $('#date1').text(eventDate1.toString());
    $('#date2').text(eventDate2.toString());
    document.getElementById("description").value = eventDescription

}

function updateEvent() {
    $('#calendar').evoCalendar('removeCalendarEvent', eventId);
    $('#calendar').evoCalendar('addCalendarEvent',{
        id: eventId, 
        name: document.getElementById("name").value,
        date: [$('#date1').text(), $('#date2').text()], 
        description: document.getElementById("description").value,
        type: "Event", 
    })

    document.getElementById('event-form').style.visibility = "hidden";
}

function showForm(){
    document.getElementById('submit').style.visibility = "visible";
    document.getElementById('submitUpdate').style.visibility = "hidden";
    document.getElementById('event-form').style.visibility = "visible";
    active_date = $('#calendar').evoCalendar('getActiveDate');
    $('#date1').text(active_date.toString());
    $('#date2').text(active_date.toString());
}


function addDate1(){
    active_date = $('#calendar').evoCalendar('getActiveDate');
    $('#date1').text(active_date.toString());
}

function addDate2(){
    active_date = $('#calendar').evoCalendar('getActiveDate');
    $('#date2').text(active_date.toString());
}

function addEvent() {
    
    $('#calendar').evoCalendar('addCalendarEvent',{
        id: Math.floor(Math.random() * 100000).toString(), 
        name: document.getElementById("name").value,
        date: [$('#date1').text(), $('#date2').text()], 
        description: document.getElementById("description").value,
        type: "Event", 
    })


    document.getElementById('event-form').style.visibility = "hidden";
}




$('#calendar').on('selectDate', function(event, newDate, oldDate) {
    document.getElementById('show-form').style.visibility = "visible";  

});
$(document).ready(function() {
    $('#calendar').evoCalendar({
        theme:"Royal Navy",
        calendarEvents: [{
                id: 'event1', // Event's ID (required)
                name: "New Year", // Event name (required)
                date: ["January/1/2022", "January/1/2022"], // Event date (required)
                description: "Happy New Year! 🥳",
                type: "holiday", // Event type (required)
                everyYear: true // Same event every year (optional)
            },
            {
                id: "event2",
                name: "Vacation Leave",
                badge: "02/13 - 02/15", // Event badge (optional)
                date: ["February/13/2022", "February/15/2022"], // Date range
                description: "Vacation leave for 3 days.", // Event description (optional)
                type: "event",
                color: "#63d867" // Event custom color (optional)
            }
            ]
    })
})



     

     