// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]
function adding(catname){destructivelyAppendCat(catname)}
function destructivelyAppendCat(name){cats.push(name)}
adding("Ralph")
function adding2(catname2){destructivelyPrependCat(catname2)}
function destructivelyPrependCat(name2){cats.unshift(name2)}
adding2("Bob")
function adding3(catname3){destructivelyRemoveFirstCat(catname3)}
function destructivelyRemoveFirstCat(name3){cats.shift(name3)}
adding3("Garfield")
function adding4(catname4){destructivelyRemoveLastCat(catname4)}
function destructivelyRemoveLastCat(name4){cats.pop(name4)}
adding4("Milo")

const newCats=appendCat("Broom")
function appendCat(name5){return [...cats,name5]}

const newCats2=prependCat("Broom")
function prependCat(name6){return [name6,...cats]}

const newCats3=cats.slice(0,-1)
function removeLastCat(){return cats.slice(0,-1)}

const newCats4=cats.slice(1)
function removeFirstCat(){return cats.slice(1)}

console.log(newCats4)
console.log(cats)