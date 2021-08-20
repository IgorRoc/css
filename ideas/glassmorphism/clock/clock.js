const deg = 6
const hr = document.querySelector("#hr")
const mn = document.querySelector("#mn")
const sc = document.querySelector("#sc")

let day = new Date()
let hh = day.getHours()
let mm = day.getMinutes()
let ss = day.getSeconds()

hr.style.setProperty("--deslocamento", `${360*hh/24}deg`)
mn.style.setProperty("--deslocamento", `${360*mm/60}deg`)
sc.style.setProperty("--deslocamento", `${360*ss/60}deg`)

console.log(hh, mm, ss)
console.log(hh+(mm/12), 360*mm/60, 360*ss/60)