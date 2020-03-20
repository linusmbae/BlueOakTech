$(document).ready(function()
{
  $("#locator").click(function()
{
  alert
  $("#locate").empty();
  $("#locate").append(
                      "<div id='locateMe'><br><br>"+
                      "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.878631131017!2d36.87573771385752!3d-1.2435455990929656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1f61992b3b2b%3A0xf36533f7660adf5f!2sAcacia%20intakes%20ltd!5e0!3m2!1sen!2ske!4v1584710713576!5m2!1sen!2ske' width='600' height='450' frameborder='0' style='border:0;' allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>"+
                      "<br><br></div>"
                      );
});
$("#myFunction").click(function(e)
{
  e.preventDefault();
  let name=$("#contactName").val()
  let email=$("#contactEmail").val();
  let message=$("#contactMessage").val();
  if(name==="" && email==="" &&message==="")
  {
    alert("empty input");
  }else
  {
    alert("Hello "+name+"? We have received your email. We will reach out to you soon.");
  }
});

});
