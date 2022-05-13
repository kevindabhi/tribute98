

  function startmenu() {
    var x = document.getElementById("dropup-content");
    if (x.style.display === "none") {
      x.style.display = "inline-block";
    } else {
      x.style.display = "none";
    }
  }



  document.querySelector("#start").addEventListener('click', startmenu)
  

  $( function() {
    $( ".draggable" ).draggable();
  } );


  function calculator() {
    var x = document.getElementById("cal2");
    if (x.style.display === "none") {
      x.style.display = "inline-block";
    } else {
      x.style.display = "none";
    }
  }



  document.querySelector("#calculator").addEventListener('click', calculator)


  /*Putting date */
  var now = new Date(Date.now());
  var formatted = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
  function dateNow(){
	document.querySelector('#time').innerText = formatted
}

 dateNow()

 function close() {
    var x = document.getElementById("cal2");      x.style.display = "none";
    }


  document.querySelector("#closecalc").addEventListener('click', close)








//   Digital clock

function Time() {

    // Creating object of the Date class
    var date = new Date();
  
    // Get current hour
    var hour = date.getHours();
    // Get current minute
    var minute = date.getMinutes();
    // Get current second
    var second = date.getSeconds();
  
    // Variable to store AM / PM
    var period = "";
  
    // Assigning AM / PM according to current hour
    if (hour >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }
  
    // Converting the hour in 12-hour format
    if (hour == 0) {
        hour = 12;
    } else {
        if (hour > 12) {
            hour = hour - 12;
        }
    }
  
    // Updating hour, minute, and second
    // if they are less than 10
    hour = update(hour);
    minute = update(minute);
    second = update(second);
  
    // Adding time elements to the div
    document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
  
    // Set Timer to 1 sec (1000 ms)
    setTimeout(Time, 1000);
  }
  
  // Function to update time elements if they are less than 10
  // Append 0 before time elements if they are less than 10
  function update(t) {
    if (t < 10) {
      return "0" + t;
    }
    else {
      return t;
    }
  }
  
  Time();

  $( function() {
    $( ".clock" ).draggable();
  } );


  function digitalclock() {
    var x = document.getElementById("digital-clock");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  
   document.querySelector("#digital-clock2").addEventListener('click', digitalclock)