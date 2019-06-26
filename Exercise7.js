class Timer {
	constructor() {
		this.currentTime = document.getElementById("counter");
		this.startTime = {
			value: document.getElementById("starttime"),
			valid: false
		};
		this.button = document.getElementsByTagName("button")[0];
		this.interval = null;
	}
	addEventListeners() {
		this.button.addEventListener("click", this.startTimer.bind(this));
	}
	startTimer() {
		if (this.startTime.valid) {
			this.changeState();
		} else {
			if (this.isStartTimeValid()) {
				this.startTime.valid = true;
				this.currentTime.innerHTML = parseInt(
					this.startTime.value.value
				);
				this.changeState();
				this.startTime.value.readOnly = true;
			} else {
				alert("Please enter a number!!");
			}
		}
	}
	isStartTimeValid() {
		let startTime = this.startTime.value.value;
		if (
			!isNaN(startTime) &&
			parseInt(startTime) === parseFloat(startTime) &&
			parseInt(startTime) > 0
		) {
			return true;
		} else {
			return false;
		}
	}
	changeState() {
		if (this.button.innerHTML === "Resume") {
			this.interval = setInterval(this.decreaseCount.bind(this), 1000);
			this.button.innerHTML = "Pause";
		} else {
			clearInterval(this.interval);
			this.button.innerHTML = "Resume";
		}
	}
	decreaseCount() {
		if (parseInt(this.currentTime.innerHTML) > 0) {
			this.currentTime.innerHTML =
				parseInt(this.currentTime.innerHTML) - 1;
		} else {
			alert("Timeout!");
			clearInterval(this.interval);
		}
	}
}
let timer = new Timer();
timer.addEventListeners();
