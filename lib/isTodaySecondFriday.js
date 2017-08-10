const getSecondFriday = require('./getSecondFriday')

module.exports = function(today) {
  return today.getDate() === getSecondFriday(today)
}
