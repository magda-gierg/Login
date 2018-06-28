$(document).ready(function() {

  document.getElementById("l_email").innerHTML = data.emailLabel;
  document.getElementById("l2_email").innerHTML = data.emailLabel;
  document.getElementById("l_password").innerHTML = data.passwordLabel;
  document.getElementById("l_rememberMe").innerHTML = data.rememberMeLabel;
  document.getElementById("forgot").innerHTML = data.forgotten;
  document.getElementById("login").innerHTML = data.login;
  document.getElementById("reset").innerHTML = data.reset;
  document.getElementById("paragraph").innerHTML = data.paragraph;
  document.getElementById("cancel").innerHTML = data.cancel;
  document.getElementById("resetPassword").innerHTML = data.resetPassword;
  document.getElementById("invalidEmail").innerHTML = data.invalidEmail;

  $("#forgot").click(function() {
    $("#div1").css('display', 'none');
    $("#div2").css('display', 'flex');
  })
  $("#cancel").click(function() {
    $("#div2").css('display', 'none');
    $("#div1").css('display', 'flex');
  })
  $('#email').on('input', function() {
    var input = $(this);
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var element = $("#l_email");
    var error_element = $("span", element.parent());
    var is_email = re.test(input.val());

    if (is_email) {
      input.removeClass("invalid").addClass("valid");
      error_element.removeClass("error_show").addClass("error");
      $("#login").attr("disabled", false);
    } else {
      input.removeClass("valid").addClass("invalid");
      error_element.removeClass("error").addClass("error_show");
      $("#login").attr("disabled", true);
    }
  });
});
