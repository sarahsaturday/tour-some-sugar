// database of bands, bookings, and venues
// 11 bands - id, name, numOfMembers, genre, yearFormed
// 27 bookings - id, date, bandId, venueId
// 5 venues - id, name, address, sqFootage, maxOccupancy
// export functions that create a copy of each database object array

const database = {
    bands: [{
        id: 1,
        name: "The Trees Trunks",
        numOfMembers: 12,
        genre: "Experimental",
        yearFormed: 1992
    },
    {
        id: 2,
        name: "The Squirrels",
        numOfMembers: 3,
        genre: "Indie",
        yearFormed: 2012
    },
    {
        id: 3,
        name: "The Monkeys",
        numOfMembers: 5,
        genre: "Funk",
        yearFormed: 2009
    },
    {
        id: 4,
        name: "The Pigeons",
        numOfMembers: 2,
        genre: "Electronic",
        yearFormed: 2017
    },
    {
        id: 5,
        name: "The Foxes",
        numOfMembers: 4,
        genre: "Alternative",
        yearFormed: 2007
    },
    {
        id: 6,
        name: "The Owls",
        numOfMembers: 6,
        genre: "Prog",
        yearFormed: 2001
    },
    {
        id: 7,
        name: "The Raccoons",
        numOfMembers: 3,
        genre: "Hip Hop",
        yearFormed: 2013
    },
    {
        id: 8,
        name: "The Deer",
        numOfMembers: 4,
        genre: "Americana",
        yearFormed: 2008
    },
    {
        id: 9,
        name: "The Badgers",
        numOfMembers: 5,
        genre: "Metal",
        yearFormed: 2010
    },
    {
        id: 10,
        name: "The Bears",
        numOfMembers: 2,
        genre: "Acoustic",
        yearFormed: 2015
    },
    {
        id: 11,
        name: "The Rabbits",
        numOfMembers: 4,
        genre: "Pop",
        yearFormed: 2006
    }],
    venues: [{
        id: 1,
        name: "The Roxy",
        address: "123 Main Street",
        sqFootage: 1200,
        maxOccupancy: 300
    },
    {
        id: 2,
        name: "The Viper Room",
        address: "8852 Sunset Blvd",
        sqFootage: 1000,
        maxOccupancy: 250
    },
    {
        id: 3,
        name: "The Troubadour",
        address: "9081 Santa Monica Blvd",
        sqFootage: 1500,
        maxOccupancy: 350
    },
    {
        id: 4,
        name: "The Whiskey A Go Go",
        address: "8901 Sunset Blvd",
        sqFootage: 1800,
        maxOccupancy: 400
    },
    {
        id: 5,
        name: "The Greek Theatre",
        address: "2700 N Vermont Ave",
        sqFootage: 4000,
        maxOccupancy: 500
    }],
    bookings: [
        { id: 1, date: "2/13/23", bandId: 4, venueId: 3 },
        { id: 2, date: "6/1/23", bandId: 2, venueId: 5 },
        { id: 3, date: "8/23/23", bandId: 11, venueId: 1 },
        { id: 4, date: "1/12/23", bandId: 3, venueId: 5 },
        { id: 5, date: "7/10/23", bandId: 6, venueId: 2 },
        { id: 6, date: "5/5/23", bandId: 8, venueId: 5 },
        { id: 7, date: "10/15/23", bandId: 1, venueId: 4 },
        { id: 8, date: "9/20/23", bandId: 5, venueId: 3 },
        { id: 9, date: "4/2/23", bandId: 2, venueId: 3 },
        { id: 10, date: "3/7/23", bandId: 9, venueId: 1 },
        { id: 11, date: "11/11/23", bandId: 4, venueId: 5 },
        { id: 12, date: "1/12/23", bandId: 10, venueId: 5 },
        { id: 13, date: "6/20/23", bandId: 3, venueId: 4 },
        { id: 14, date: "4/30/23", bandId: 7, venueId: 2 },
        { id: 15, date: "8/8/23", bandId: 1, venueId: 5 },
        { id: 16, date: "9/15/23", bandId: 6, venueId: 2 }
    ]

}

export const getBands = () => {
    const bandsCopy = [...database.bands];
    return bandsCopy
    // You write the code for copying the array and returning it
}

export const getVenues = () => {
    const venuesCopy = [...database.venues];
    return venuesCopy
    // You write the code for copying the array and returning it
}

export const getBookings = () => {
    const bookingsCopy = [...database.bookings];
    return bookingsCopy
    // You write the code for copying the array and returning it
}