export const numberToString = (number) => {

    if (typeof number !== 'number') {
        throw new Error('Invalid input. Expected a number.');
    }

    return number.toFixed(number);
};