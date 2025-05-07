
// Problem 1

function formatString(input: string, toUpper: boolean  = true) : string {
    return toUpper? input.toUpperCase() : input.toLowerCase()
}




// Problem 2

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter(item => item.rating >= 4)
}




// Problem 3

function concatenateArrays<T>(...arrays: T[][]): T[]{
    return arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
}






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


// Problem 5

function processValue(value: string | number): number{
    if(typeof value === 'string'){
        return value.length;
    }else{
        return value * 2;
    }
}


// Problem 6

interface Product {
    name: string;
    price: number;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length === 0){
        return null;
    }
    return products.reduce((maxProduct, currentProduct) => 
        currentProduct.price > maxProduct.price ? currentProduct : maxProduct
      );
  }


