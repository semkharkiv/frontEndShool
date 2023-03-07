$('#btn5').click(function() {
    $('.root').append('<p style="color: blue;">Синий текст</p>');
    $('.root').append('<p style="color: green;">Зеленый текст</p>');
  });
  $('#btn4').click(function() {
    $('.root').append('<p style="color: blue;">Произвольный текст</p>');
  });
  $('#btn3').click(function() {
    $('#square3').animate({ width: '+=20px', height: '+=20px' });
  });
  $('#btn2').click(function() {
    $('#square2').css('background-color', 'blue');
    console.log('Цвет квадрата: ' + $('#square2').css('background-color'));
  });
  $('#btn1').click(function() {
    $('#square1').css('background-color', 'green');
    $('#square1').animate({ width: '100px', height: '100px' });
  });
  