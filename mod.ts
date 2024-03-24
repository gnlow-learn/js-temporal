import { Temporal } from "https://esm.sh/temporal-polyfill@0.2.3"

const calendar = new Temporal.Calendar("ethiopic")

const now = Temporal.Now.plainDate(calendar)

console.log(calendar.year(now))
console.log(now.toString())

Temporal.Now.plainDate