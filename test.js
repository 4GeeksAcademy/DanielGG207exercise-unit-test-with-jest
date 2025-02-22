const {sum, euroToDollar, dollarToYen , yenToPound} = require("./app.js")




test("transform euro to dollar", () => {
    expect(euroToDollar(3.5)).toBe(3.745)
})

test("transform dollar to yen", () => {
    expect(dollarToYen(1)).toBeCloseTo(145.794)
})

test("transform yen to pound", ()=> {
    expect(yenToPound(1000)).toBeCloseTo(5.559)
})
test("add 1 + 9" , () => {
expect(sum(10,9)).toBe(19);





})
