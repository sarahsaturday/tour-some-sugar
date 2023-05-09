// import function from database that creates copy of bands array
import { getBands, getVenues, getBookings } from "./database.js";

// declare a variable to invoke functions()

const venues = getVenues()
const bookings = getBookings()

// export a function that returns the bandsHTML
// bandsHTML uses for loop to create compounded list +=
// option to alphabetize using if statement (see CargoShips)

export const BandsList = () => {
    let bands = getBands();

    bands = bands.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });

    let bandsHTML = "<ul>";

    for (const band of bands) {
        bandsHTML += `<li class="bands" data-bandid="${band.id}" data-bandname="${band.name}">${band.name}</li>`;
    }

    bandsHTML += "</ul>";

    return bandsHTML;
}

// add event listener for when someone clicks on the band name
// the click should pop open a window that shows which venues the 
// band will be playing

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

    if (itemClicked.classList.contains("bands")) {
        const bandId = +itemClicked.dataset.bandid; // Get the band ID from the clicked element
        const bandName = itemClicked.textContent.replace(/\s+/g, ' '); // Get the band name from the clicked element

        const bandBookings = bookings.filter((booking) => booking.bandId === bandId);

        let message = `${bandName} will be playing at `;
        if (bandBookings.length === 0) {
            message += "[no bookings]";
        } else if (bandBookings.length === 1) {
            const venue = venues.find((venue) => venue.id === bandBookings[0].venueId);
            message += `${venue.name}`;
        } else {
            const venueNames = bandBookings.map((b) => {
                const venue = venues.find((venue) => venue.id === b.venueId);
                return `${venue.name}`;
            }).join(", ");
            message += `${venueNames}`;
        }

        alert(message);
    }
});
