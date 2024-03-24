const calendar = new Temporal.Calendar("hebrew")

console.log(calendar)

const now = Temporal.Now.plainDate(calendar)

console.log(calendar.year(now))
console.log(now.toString())

Temporal.Now.plainDate