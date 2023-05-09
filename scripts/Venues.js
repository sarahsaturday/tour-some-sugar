// import function from database that creates copy of venues array
import { getBands, getVenues, getBookings } from "./database.js";

// declare a variable to invoke function()
// export a function that returns the venuesHTML
    // venuesHTML uses for loop to create compounded list +=
    // option to alphabetize using if statement (see CargoShips)

    export const VenuesList = () => {
        let venues = getVenues();
    
        venues = venues.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    
        let venuesHTML = "<ul>";
    
        for (const venue of venues) {
            venuesHTML += `<li class="venues" data-venueid="${venue.id}" data-venuename="${venue.name}">${venue.name}</li>`;
        }
    
        venuesHTML += "</ul>";
    
        return venuesHTML;
    }

// add event listener for when someone clicks on the venue name
// the click should pop open a window that shows which bands have
// played this venue before 5/9/23 and a list of which bands 
// are playing after 5/9/23

// add event listener for when someone clicks on the venue name
// the click should pop open a window that shows which bands have
// played this venue before 5/9/23 and a list of which bands 
// are playing after 5/9/23

document.addEventListener("click", async (clickEvent) => {
    const itemClicked = clickEvent.target;

    if (itemClicked.classList.contains("venues")) {
        const venueId = +itemClicked.dataset.venueid; // Get the venue ID from the clicked element
        const venueName = itemClicked.textContent.replace(/\s+/g, ' '); // Get the venue name from the clicked element

        const bookings = await getBookings();
        const bands = await getBands();
        const venues = await getVenues();

        const pastBookings = bookings.filter((booking) => {
            return booking.venueId === venueId && new Date(booking.date) < new Date(2023, 4, 9);
        });

        const futureBookings = bookings.filter((booking) => {
            return booking.venueId === venueId && new Date(booking.date) >= new Date(2023, 4, 9);
        });

        let message = `${venueName} has hosted these bands before May 9, 2023:`;
        if (pastBookings.length === 0) {
            message += "\n[no past bookings]";
        } else {
            const pastBandNames = pastBookings.map((b) => {
                const band = bands.find((band) => band.id === b.bandId);
                return `\n- ${band.name}`;
            }).join("");
            message += pastBandNames;
        }

        message += `\n\n${venueName} will be hosting these bands after May 9, 2023:`;
        if (futureBookings.length === 0) {
            message += "\n[no future bookings]";
        } else {
            const futureBandNames = futureBookings.map((b) => {
                const band = bands.find((band) => band.id === b.bandId);
                return `\n- ${band.name}`;
            }).join("");
            message += futureBandNames;
        }

        alert(message);
    }
});
