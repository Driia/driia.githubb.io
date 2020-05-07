$(document).ready(function() {
    $('#list').change(function() {
        var selected = 0;
        $('#list option:selected').each(function(){
            selected++;
        });
        $('#result').text(selected);
    });
  });
  
  