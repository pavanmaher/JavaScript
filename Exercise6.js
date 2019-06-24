class Outer {
	constructor() {
		this.outerDiv = document.getElementsByClassName("container")[0];
		this.button = document.getElementsByTagName("button")[0];
		this.count = 0;
	}
	addEventListener() {
		this.button.addEventListener("click", this.add.bind(this));
	}

	add() {
		let element = document.createElement("div");
		element.classList.add("inner");
		element.innerText = this.count++;
		element.addEventListener("click", this.show.bind(this));
		this.outerDiv.appendChild(element);
	}
	show(event) {
		alert(event.currentTarget.innerText);
	}
}
let outer = new Outer();
outer.addEventListener();
