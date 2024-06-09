const toFeet = 3.28
const toMetres = 0.30
const toGallons = 0.22
const toLitres = 4.55
const toKilos = 0.45
const toPounds = 2.20
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", () => {
	let units = document.getElementById("input-el").value

	document.getElementById("feet").textContent = units
	document.getElementById("metres").textContent = units
	document.getElementById("litres").textContent = units
	document.getElementById("gallons").textContent = units
	document.getElementById("kilos").textContent = units
	document.getElementById("pounds").textContent = units
	
	let m2f = units * toFeet
	document.getElementById("unit-ft").textContent = m2f.toFixed(2)
	
	let f2m = units * toMetres
	document.getElementById("unit-m").textContent = f2m.toFixed(2)
	
	let l2g = units * toGallons
	document.getElementById("unit-gal").textContent = l2g.toFixed(2)
	
	let g2l = units * toLitres
	document.getElementById("unit-l").textContent = g2l.toFixed(2)
	
	let k2p = units * toPounds
	document.getElementById("unit-lb").textContent = k2p.toFixed(2)
	
	let p2k = units * toKilos
	document.getElementById("unit-kg").textContent = p2k.toFixed(2)

	document.getElementById("input-el").value = 1
})