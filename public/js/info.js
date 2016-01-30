'use strict';
$(document).ready(init);

var temp;
var logEntry;

function init() {
  $('#newEntry').click(addNewLog);
$.ajax({
    url:"http://api.wunderground.com/api/fa798b8605df3bb3/conditions/q/CA/San_Francisco.json",
    type: "GET",
    // contentType:"jsonp",
    success: function(data) {
      temp =  $('<p>').text(data.current_observation.temp_f);
      $('#weather').append(temp);
    },
  });
}


function addNewLog(event) {
event.preventDefault();

var dateEntry = $('#dateEntry').val();
var date = moment(dateEntry).format('llll');
var mileage = $('#mileEntry').val();
var location = $('#locEntry').val();
var weather = $('#weather p').text();
console.log($('#weather p').text());
console.log(name, mileage, location, weather);

var user = {date: date, mileage: mileage, location: location, weather: weather};
  console.log(logEntry);
  $.post('/info', user, function(data) {
    document.location.reload();
  });
}
