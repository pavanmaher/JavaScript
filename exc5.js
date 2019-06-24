class SelectionBox {
	constructor(id1, id2) {
		this.countries = document.getElementById(id1);
		this.button = document.getElementById(id2);
	}
	addListener(box) {
		this.button.addEventListener(
			"click",
			function() {
				let array = [];
				for (let i = 0; i < this.countries.options.length; i++) {
					if (this.countries.options[i].selected == true) {
						this.countries.options[i].selected = false;
						array.push(this.countries.options[i]);
					}
				}
				for (let i = 0; i < array.length; i++) {
					this.countries.removeChild(array[i]);
				}
				for (let i = 0; i < array.length; i++) {
					box.countries.appendChild(array[i]);
				}
			}.bind(this)
		);
	}
}
let box1 = new SelectionBox("first", "add");
let box2 = new SelectionBox("second", "remove");

box1.addListener(box2);
box2.addListener(box1);
