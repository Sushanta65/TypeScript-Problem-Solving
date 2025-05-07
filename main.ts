
// Problem 1

function formatString(input: string, toUpper: boolean  = true) : string {
    return toUpper? input.toUpperCase() : input.toLowerCase()
}

// console.log(formatString('hello'))


// Problem 2
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter(item => item.rating >= 4)
}

// console.log(filterByRating(books))
