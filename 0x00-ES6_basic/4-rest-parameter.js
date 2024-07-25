export default function returnHowManyArguments(...theArgs) {
    let counter = 0;

    for (const arg of theArgs) {
        counter += 1;
    }

    return counter;
}
