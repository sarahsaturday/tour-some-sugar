// import function from database that creates copy of bookings array
import { getBookings, getBands, getVenues } from "./database.js";

// declare a variable to invoke function()
const bands = getBands();
const venues = getVenues();

// bookings can have up to two bands
// export a function that returns the bookingsHTML
// bookingsHTML uses for loop to create compounded list +=
// option to alphabetize using if statement (see CargoShips)

export const BookingsList = () => {
    const bookings = getBookings();
    let bookingsHTML = '<ul>';

    for (const booking of bookings) {
        const band = bands.find((band) => band.id === booking.bandId);
        const venue = venues.find((venue) => venue.id === booking.venueId);
        bookingsHTML += `<li class="bookings" data-bookingbandid="${booking.bandId}" data-bookingvenueid="${booking.venueId}">${band.name} are playing ${venue.name} on ${booking.date}</li>`;
    }

    bookingsHTML += '</ul>';

    return bookingsHTML;
};


// add event listener for when someone clicks on the booking in the booking list
// the click should pop open a window that shows all band info for the band
// on that booking, which requires matching the bandID property from the booking
// to the band.name property on the objects in the the bands array in the database:
    // name, genre, year, and number of members

    document.addEventListener("click", (clickEvent) => {
        const itemClicked = clickEvent.target;
    
        if (itemClicked.classList.contains("bookings")) {
            const bandId = +itemClicked.dataset.bookingbandid;
            const band = bands.find((band) => band.id === bandId);
    
            const bandInfo = `Band Name: ${band.name}\nGenre: ${band.genre}\nYear Formed: ${band.yearFormed}\nNumber of members: ${band.numOfMembers}`;
    
            // window.open("", "Band Info", "height=200,width=300");
            // const bandInfoWindow = window.open("", "Band Info");
            // bandInfoWindow.document.write(`<p>${bandInfo}</p>`);

            alert(bandInfo)
        }
    });
    