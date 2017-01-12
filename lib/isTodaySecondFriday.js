const getSecondFriday = require('./getSecondFriday')

module.exports = function() {
  const today = new Date()
  return today.getDate() === getSecondFriday(today)
}
