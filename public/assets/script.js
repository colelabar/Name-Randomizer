$(document).ready(function() {

  // $('#generateButton').click(function(e){
  //   e.preventDefault();
  //
  //   function generateNumber(min, max) {
  //     const raw = Math.random() * (max-min);
  //     const rounded = Math.round(raw);
  //     $('#number').html(rounded);
  //   }
  //
  //   generateNumber(1, 250);
  //
  // });

 //import json array

 //array for each, use jquery to append a div to spinner div

 $.getJSON( '/public/assets/attendeeList.json', function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( '<div>' + val.FullName + '</div>' );
  });

  $('#spinner').append(items);

  const element = document.getElementById('spinner');
  const machine = new SlotMachine(element, {
    active: 0,
    delay: 2500,
    auto: false,
    direction: 'down',
    transition: 'all 0.8s ease-out 0s'
  });

  const button = document.getElementById('generateButton');
  button.addEventListener('click', () => {
    machine.shuffle();
    machine.stop();
  });
});

})
