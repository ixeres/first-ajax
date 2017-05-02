$(document).ready(function () {

  var rootURL = 'http://first-ajax-api.herokuapp.com/';

  $('#step1').on('click', function() {
    $.ajax({
      url: rootURL,
      method: 'GET',
      data: '{}',
      dataType: 'JSON',
    });
  });

  var runNum = 0;
function pingPong() {
  if ((runNum % 2) === 0) {
    runNum++;
    return 'ping';
  } else {
    runNum++;
    return 'pong';
  }
}

$('#step3').on('click', function() {
  $.ajax({
  url: rootURL + pingPong(),
  method: 'GET',
  dataType: 'text'
}).done(function (responseData) {
  console.log((responseData));
  $('#step3456').append((responseData));
}).fail(function(responseData) {
  console.log('FAIL. You dun goofed!');
$('#step3456').append('FAIL. You dun goofed!');
}).always(function() {
  console.log('Some stuff happened. Now it is done.')
});
});

$('#seven').on('click', function() {
  $.ajax({
  url: rootURL + '/count',
  method: 'GET',
  dataType: 'text'
}).done(function (responseData) {
  console.log((responseData));
  $('#seven').append((responseData));
}).fail(function(responseData) {
  console.log('FAIL. You dun goofed!');
$('#seven').append('FAIL. You dun goofed!');
}).always(function() {
  console.log('Some stuff happened. Now it is done.')
});
});

$('#eight').on('click', function() {
  $.ajax({
  url: rootURL + '/time',
  method: 'GET',
  data: { timezone: 'Asia/Kolkata' },
  dataType: 'text'
}).done(function (responseData) {
  console.log((responseData));
  $('#eight').append((responseData));
}).fail(function(responseData) {
  console.log('FAIL. You dun goofed!');
$('#eight').append('FAIL. You dun goofed!');
}).always(function() {
  console.log('Some stuff happened. Now it is done.')
});
});

$('#nine').on('click', function() {
  $.ajax({
  url: rootURL + '/a_car',
  method: 'GET',
  dataType: 'html'
}).done(function (responseData) {
  console.log((responseData));
  $('#list').append((responseData));
}).fail(function(responseData) {
  console.log('FAIL. You dun goofed!');
$('#nine').append('FAIL. You dun goofed!');
}).always(function() {
  console.log('Some stuff happened. Now it is done.')
});
});

});
