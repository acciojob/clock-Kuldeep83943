//your JS code here. If required.

// let currentDate = new Date();
// let output = document.getElementById("timer");
// output.innerText=currentDate;

 function updateTime() {
            // Get the current date and time
            var now = new Date();

            // Format the date and time
            var dateString = now.toLocaleDateString();
            var timeString = now.toLocaleTimeString();

            // Update the content of the p tag
            document.getElementById('timer').textContent = dateString + ', ' + timeString;
        }

        // Call updateTime initially to display the time immediately
        updateTime();

        // Update the time every second
        setInterval(updateTime, 1000);