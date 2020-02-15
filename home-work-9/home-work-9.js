//----------------------Task ONE----------------------

$('a[href^="https://"]').attr('target', '_blank');

//----------------------Task TWO----------------------

$('h2.head').css('background', 'green');
$('h2.head .inner').css('font-size', '35px');

//----------------------Task THREE----------------------

$('h3+div:first').insertBefore('h3:first');
$('h3+div:last').insertBefore('h3:last');

//----------------------Task FOUR----------------------

$('input[type=checkbox]').change(function() {
  if ($('input[type=checkbox]:checked').length === 3) {
    $('input[type=checkbox]').attr('disabled', 'disabled');
    $('input[type=checkbox]:checked').removeAttr('disabled');
  } else {
    $('input[type=checkbox]').removeAttr('disabled');
  }
});
