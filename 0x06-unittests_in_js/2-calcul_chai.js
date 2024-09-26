function calculateNumber(type, a, b) {
    let result;
    let rounded_a = Math.round(a);
    let rounded_b = Math.round(b);

    switch (type) {
        case "SUM":
            result = rounded_a + rounded_b;
            break;
        case "SUBTRACT":
            result = rounded_a - rounded_b;
            break
        case "DIVIDE":
            if (rounded_b === 0) {
                return "Error";
            }
            result = rounded_a / rounded_b;
            break
        default:
            break;
    }

    return result
}

module.exports = calculateNumber;
