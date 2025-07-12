const sum = (a,b) => {
    return a+b
}

console.log(sum(1,9))

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


function dollarToYen(dollar){
    return (dollar / oneEuroIs.USD) *156

}

function euroToDollar(euro){
    return (euro*oneEuroIs.USD)

}

function yenToPound(yen){
  return (yen/oneEuroIs.JPY) *0.87
}

module.exports = {sum, dollarToYen,euroToDollar, yenToPound}; 
