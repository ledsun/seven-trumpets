const getSecondFriday = require('get-second-friday')

module.exports = function(today) {
  return today.getDate() === getSecondFriday(today)
}
