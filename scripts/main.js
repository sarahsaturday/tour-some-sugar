import { BandsList } from "./Bands.js"
import { VenuesList } from "./Venues.js"
import { BookingsList } from "./Bookings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Samantha Ducarte Tours</h1>

<article class="bookings">
    <h2>Bookings</h2>
    ${BookingsList()}
</article>

<article class="details">
    <section class="band-list">
        <h2>Bands</h2>
        ${BandsList()}
    </section>
    <section class="venue-list">
        <h2>Venues</h2>
        ${VenuesList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML

