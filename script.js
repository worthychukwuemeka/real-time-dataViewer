function updateUTCTime() {
    const utcTimeElement = document.getElementById('utcTime');
    const currentTime = new Date();
    
    // Function to set the time to UTC+1:00 (West African Time)
    currentTime.setUTCSeconds(currentTime.getUTCSeconds() + 3600);
    
    const hours = currentTime.getUTCHours();
    const minutes = currentTime.getUTCMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = currentTime.getUTCMilliseconds().toString().padStart(3, '0');

    // Conditional statement to determine whether it's AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Function to convert hours into 12-hour format
    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');

    const timeString = `${formattedHours}:${minutes}:${seconds}.${milliseconds} ${ampm}`;
    utcTimeElement.textContent = timeString;
}

// 1000 milliseconds functionality added
updateUTCTime();
setInterval(updateUTCTime, 1000);

// Function to display day of the week and date of the month
function displayDayAndDate() {
    const dayOfWeekElement = document.getElementById('dayOfWeek');
    const dateOfMonthElement = document.getElementById('dateOfMonth');
    
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    
    const dayOfWeek = daysOfWeek[currentDate.getDay()]; // This displays the day of the week
    const dateOfMonth = currentDate.getDate(); // This displays the date of the month
    
    dayOfWeekElement.textContent = `${dayOfWeek},`;
}

// Function to display the initial values
displayDayAndDate();

// Function to update the values every second
setInterval(displayDayAndDate, 1000);
