// Write your solution here!

// Initialization of the cats array with three cat names
const cats = ["Milo", "Otis", "Garfield"];

// Destructively append a new cat 'Ralph' to the end of the array
function destructivelyAppendCat (name) {
    return cats.push (name);
}

// Destructively prepend a new cat 'Bob' to the beginning of the array
function destructivelyPrependCat (name) {
    return cats.unshift (name);
}

// Destructively remove the last cat from the array
function destructivelyRemoveLastCat (name) {
    return cats.pop (name);
}

// Destructively remove the first cat from the array
function destructivelyRemoveFirstCat (name) {
    return cats.shift (name);
}

// Create a new array 'appendCat' by adding 'Broom' to the beginning of the 'cats' array
function appendCat (name) {
    return [...cats, name];
    
}

// Create a new array 'prependCat' by adding 'Arnold' to the end of the 'cats' array
function prependCat (name) {
    return [name , ...cats];
}

// Remove the last cat from the array without changing the original array
function removeLastCat () {
    return [...cats.slice (0,2)]
}

// Remove the first cat from the array without changing the original array
function removeFirstCat () {
    return [...cats.slice (1)]
}
