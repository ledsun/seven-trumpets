const firstDate = 1
const week = 7

module.exports = function(date) {
  return firstDate + (12 - (new Date(date.getFullYear(), date.getMonth(), 1))
    .getDay()) % 7 + week * 1
}
