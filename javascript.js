
let tbody = document.querySelector(".table");
let input = document.querySelectorAll("input");
let sub = document.querySelector(".sub");
let show_btn = document.querySelector(".show_btn");
let form = document.querySelector(".fr")
let hide_btn = document.querySelector(".hide_btn")

let students = function (name, email, roll, address, images) {
	this.name = name;
	this.email = email;
	this.roll = roll;
	this.address = address;
	this.images = images;
	this.all = `<tr><td>${name}</td><td>${email}</td><td>${roll}</td><td>${address}</td><td><img src="${images}" alt="Students_img"></td></tr>`
}

sub.addEventListener("click", function (e) {
	e.preventDefault()
	let nam;
	let eml;
	let rol;
	let adr;
	let im;
	input.forEach(function (one) {
		if (one.name == "num") {
			nam = one.value
		} else if (one.name == "email") {
			eml = one.value
		} else if (one.name == "roll") {
			rol = one.value
		} else if (one.name == "address") {
			adr = one.value
		}
		else if (one.name == "file") {
			im = one.value
		}
		one.value = ""
	})
	let test = new students(nam, eml, rol, adr, "D:\WEB-DESIGN\JavaScript\JS_Pramitar\img\1.png")
	tbody.insertAdjacentHTML("beforeend", test.all)

})
show_btn.addEventListener("click",function(){
	form.style.display = "block"
})
hide_btn.addEventListener("click",function(){
	form.style.display = "none"
})






