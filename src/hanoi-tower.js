const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  function pow(n) {
    let x = 0;
    if (n == 0) {
        return x;
    } else {
        return pow(n - 1) * 2 + 1;
    }
    }
turns = pow(disksNumber);
seconds = Math.floor((turns *3600 ) / turnsSpeed);

return { turns: turns, seconds: seconds }; 
}

module.exports = {
  calculateHanoi
};
