var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function myFunction() {

  console.log("The form was submitted");
  
  var data = this.document.getElementById("mydata").value;
  
  var nurl="https://lpbmwp250e.execute-api.ap-southeast-2.amazonaws.com/default/myHello?personName="+data;
  
  console.log(nurl);
  
  window.open(nurl, '_blank');
  
  }
