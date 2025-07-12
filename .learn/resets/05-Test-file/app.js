const sum = (a,b) => {
    return a+b
}

console.log(sum(1,9))

function dollarToYen(dollar){
    return (dollar / 1.07) *156

}

function euroToDollar(euro){
    return (euro*1.07)

}

function yenToPound(yen){
  return (yen/156.5) *0.87
}

module.exports = {sum, dollarToYen,euroToDollar, yenToPound}; 
