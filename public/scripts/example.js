$('document').ready(function() {
  console.log('document ready');
  $('#sendInfo').on('click', function() {
    console.log('sendInfo clicked');

    // get user input
    var creatureIn = $('#creatureIn').val();
    var noiseIn = $('#noiseIn').val();

    // assemble object to send to server
    var objectToSend = {
      creature: creatureIn,
      noise: noiseIn
    };

    $.ajax({
      type: 'POST',
      url: '/texter',
      data: objectToSend,
      success: function(data) {
        console.log('Data from server: ' + data);
      } //end success
    }); //end ajax
  }); //end sendInfo on click
}); //end document ready
