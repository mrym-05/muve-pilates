
/* gets all the date buttons from the calendar */
const calendarDays = document.querySelectorAll(".calendar-day");

/* gets the heading that displays the selected date */
const selectedDate = document.getElementById("selected-date");

/* gets the introductory message underneath the heading */
const scheduleContent = document.getElementById("schedule-content");

/* gets the available classes section */
const availableClasses = document.getElementById("available-classes");

/* gets the fully booked message section */
const fullyBooked = document.getElementById("fully-booked");

/* gets the unavailable dates message section */
const unavailableDates = document.getElementById("unavailable-dates");

// WEB3FORMS SECTION stores the date selected by the user
let selectedBookingDate = "";

/* loops through every calendar date button */
calendarDays.forEach((day) => {

    /* listen for a click on each button */
    day.addEventListener("click", () => {

        // for the modal
        selectedBookingDate = `${day.textContent.trim()} December 2026`;

        /* updates the heading with the selected date */
        selectedDate.innerHTML = `
            <h3 class="mt-4 selected-date-heading">
                Classes for ${day.textContent.trim()} December 2026
            </h3>
        `;

        /* hides the introductory message after a date is clicked */
        scheduleContent.style.display = "none";

        /* hide everything first */
        availableClasses.style.display = "none";
        fullyBooked.style.display = "none";
        unavailableDates.style.display = "none";

        /* show timetable for available dates */
        if (day.classList.contains("available")) {

            availableClasses.style.display = "block";

        }

        /* show fully booked message */
        if (day.classList.contains("fully-booked")) {

            fullyBooked.style.display = "block";

        }

        /* show unavailable message */
        if (day.classList.contains("unavailable")) {

            unavailableDates.style.display = "block";

        }

    });

});


// WEB3FORMS SECTION

/* gets the booking modal */
const bookingModal = document.getElementById("bookingModal");

/* listens for the modal opening */
bookingModal.addEventListener("show.bs.modal", function (event) {

    /* gets the button that was clicked */
    const button = event.relatedTarget;

    /* finds the table row containing that button */
    const row = button.closest("tr");

    /* gets the class name */
    const className = row.cells[1].textContent.trim();

    /* gets the class time */
    const classTime = row.cells[0].textContent.trim();

    /* sends the information to the hidden form inputs */
    document.getElementById("bookingClass").value = className;

    document.getElementById("bookingTime").value = classTime;

    document.getElementById("bookingDate").value = selectedBookingDate;

});
