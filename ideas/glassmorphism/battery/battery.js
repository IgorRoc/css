let progress = document.querySelector("#progress")
let batteryValue = document.querySelector("#batteryValue")
let slider = document.querySelector("#sliderBar")
let outOfCharge = document.querySelector("#outOfCharge")
let fullCharge = document.querySelector("#fullCharge")

slider.addEventListener("change", (e) => {
	progress.style.width = slider.value + "%"
	batteryValue.innerText = slider.value + "%"
	if (slider.value <= 0) {
		outOfCharge.classList.remove("hide")
		fullCharge.classList.add("hide")
	} else if (slider.value >= 100) {
		fullCharge.classList.remove("hide")
		outOfCharge.classList.add("hide")
	} else {
		outOfCharge.classList.add("hide")
		fullCharge.classList.add("hide")
	}
})

slider.addEventListener("mousedown", (e) => {
	slider.addEventListener("mousemove", (ev) => {
		progress.style.width = slider.value + "%"
		batteryValue.innerText = slider.value + "%"
		if (slider.value <= 0) {
			outOfCharge.classList.remove("hide")
			fullCharge.classList.add("hide")
		} else if (slider.value >= 100) {
			fullCharge.classList.remove("hide")
			outOfCharge.classList.add("hide")
		} else {
			outOfCharge.classList.add("hide")
			fullCharge.classList.add("hide")
		}
	})
})

getBatteryPercent()
function getBatteryPercent() {
	console.log("entrou")
	navigator.getBattery().then((bat) => {
		progress.style.width = bat.level * 100 + "%"
		batteryValue.innerText = bat.level * 100 + "%"
		slider.value = bat.level * 100
		if (bat.level <= 0) {
			outOfCharge.classList.remove("hide")
			fullCharge.classList.add("hide")
		} else if (bat.level >= 1) {
			fullCharge.classList.remove("hide")
			outOfCharge.classList.add("hide")
		} else {
			outOfCharge.classList.add("hide")
			fullCharge.classList.add("hide")
		}
	})
}
