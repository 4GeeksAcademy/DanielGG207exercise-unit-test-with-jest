const {sum, euroToDollar, dollarToYen , yenToPound} = require("./app.js")




test("transform euro to dollar", () => {
    // Si 1 euro = 1.07 dólares, entonces 3.5 euros = x dólares
    // Regla de tres: x = 3.5 * 1.07 = 3.745
    expect(euroToDollar(3.5)).toBe(3.745)
    
})

test("transform dollar to yen", () => {
     // Si 1 euro = 1.07 dólares y también 1 euro = 156.5 yenes,
    // entonces 1 dólar = (1/1.07) euros, y esos euros en yenes:
    // Regla de tres: x = (1/1.07) * 156.5 ≈ 145.794
    expect(dollarToYen(1)).toBeCloseTo(145.794)
    
})

test("transform yen to pound", ()=> {
    // Si 1 euro = 156.5 yenes y 1 euro = 0.87 libras,
    // entonces 1 yen = (1/156.5) euros, y esos euros en libras:
    // Regla de tres: x = (1/156.5)*0.87 = 0.005559..., entonces 1000 yenes = 1000 * 0.005559 ≈ 5.559
    expect(yenToPound(1000)).toBeCloseTo(5.559)
    
})
test("add 1 + 9" , () => {
expect(sum(10,9)).toBe(19);





})
