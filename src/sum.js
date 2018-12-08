/**
 * Sum numbers.
 * @param  {...number} numbers 
 */
function sum(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
module.exports = sum;
