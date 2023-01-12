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
    
  arr = nurl.split("personName=");
  
  if (arr[1] == (data)){
    console.log(".");
    console.log("The lambda function for " + data + " was recieved successfully");
    console.log(".");
  }
  else{    
    console.log(arr[1].length + " arr then data: " + data.length);
    console.log(".");
    console.log("The lambda function for " + data + " was not successfull, the response was " + arr[1]);
    console.log(".");
  }

  window.open(nurl, '_blank');
  
  }
