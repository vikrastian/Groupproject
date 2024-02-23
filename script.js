document.addEventListener("DOMContentLoaded", function() {
    const calendarPopup = document.getElementById("datepickerPopup");
    const calendarBtn = document.getElementById("datepickerBtn");
    const closeBtn = document.getElementById("closeDatepicker");


    function togglePopup() {
        if (calendarPopup.style.display === "block") {
            calendarPopup.style.display = "none";
        } else {
            const buttonRect = calendarBtn.getBoundingClientRect();
            const buttonX = buttonRect.left + window.scrollX;
            const buttonY = buttonRect.top + window.scrollY;

            calendarPopup.style.left = (buttonX - 10) + "px";
            calendarPopup.style.top = (buttonY - calendarPopup.offsetHeight - 180) + "px";

            calendarPopup.style.display = "block";
        }
    }
    document.addEventListener("DOMContentLoaded", function() {

        const today = new Date().toISOString().split('T')[0];
    
        document.getElementById("datepicker").value = today;
    });
    calendarBtn.addEventListener("click", togglePopup);


    closeBtn.addEventListener("click", togglePopup);


    document.addEventListener("click", function(event) {
        if (!calendarBtn.contains(event.target) && !calendarPopup.contains(event.target)) {
            calendarPopup.style.display = "none";
        }
    });
});
