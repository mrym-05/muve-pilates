const calendarDays = document.querySelectorAll(".calendar-day");

const selectedDate = document.getElementById("selected-date");

calendarDays.forEach((day) => {

    day.addEventListener("click", () => {

        selectedDate.innerHTML = `
            <h3 class="mt-4">
                Classes for ${day.textContent} December 2026
            </h3>
        `;

    });

});
