
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



// Problem 3

function concatenateArrays<T>(...arrays: T[][]): T[]{
    return arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
}

// console.log(concatenateArrays([1, 2], [3, 4], [5])); 




// Problem 4

class Vehicle{
    private make: string;
    private year: number

    constructor(make: string, year: number){
        this.make = make;
        this.year = year
    }

    public getInfo(): string{
        return `Make: ${this.make}, Year: ${this.year}`
    }
}


class Car extends Vehicle{
    private model: string;

    constructor(make: string, year: number, model: string){
        super(make, year);
        this.model = model
    }

    public getModel(): string{
        return `Model: ${this.model}`
    }
}




