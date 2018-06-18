//custom function
function calculateTip() {

    //store the date of the imnputs
    var billAmount = document.getElementById('billAmount').value;
    var serviceQuality = document.getElementById('serviceQuality').value;
    var numPeople = document.getElementById('totalPeople').value;

    // Quick validation
    if(billAmount === "" || serviceQuality == 0) {
      return window.alert('Pleace enter some value');
    }

    // Check to see if this input is empty or less than or equal to 1
    if (numPeople === "" || numPeople <= 1) {
      numPeople = 1;

      document.getElementById('each').style.display = "none";
    } else {
      document.getElementById('each').style.display = "block";
    }

    // Do some math!
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    //display the TIP !
    document.getElementById('totalTip').style.display = "block";
    document.getElementById('tip').innerHTML = total;

}

// hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// clicking the button calls the function
document.getElementById("calculate").onclick = function() { calculateTip(); };
