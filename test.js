const {sum, euroToDollar, dollarToYen , yenToPound} = require("./app.js")




test("transform euro to dollar", () => {
    //expected = 3.5 * 1.07 = 3.745
    expect(euroToDollar(3.5)).toBe(3.745)
    
})

test("transform dollar to yen", () => {
     // expected = (1/1.07) * 156.5
    expect(dollarToYen(1)).toBeCloseTo(145.794)
    
})

test("transform yen to pound", ()=> {
    //expected = (1/156.5)*0.87
    expect(yenToPound(1000)).toBeCloseTo(5.559)
    
})
test("add 1 + 9" , () => {
expect(sum(10,9)).toBe(19);





})
