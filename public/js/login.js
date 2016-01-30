'use strict';

var $email, $password;

$(function() {
  $email = $('#email');
  $password = $('#password');

  $('form').on('submit', loginUser);
  // $('#submitLogin').click(loginUser);
});

function loginUser(e) {
  e.preventDefault();

  var email = $email.val();
  var password = $password.val();

  $.post('/users/login', {email: email, password: password})
  .success(function(data) {
    location.href = '/';
  })
  .fail(function(err) {
    alert('Error.  Check console.');
    console.log('err:', err);
  });
}
