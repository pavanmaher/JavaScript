class Checkbox {
  constructor(tag) {
    this.days = document.getElementsByTagName(tag);
    for (let i = 0; i < this.days.length; i++) {
      this.days[i].addEventListener(
        "click",
        this.restrictMoreThanThreeCheckboxes.bind(this)
      );
    }
  }

  restrictMoreThanThreeCheckboxes(event) {
    if (event.currentTarget.value === "none") {
      for (let i = 0; i < this.days.length; i++) {
        if (this.days[i].value != "none" && this.days[i].checked === true) {
          this.days[i].checked = false;
        }
      }
      return false;
    }
    if (this.days[7].checked === true) {
      this.days[7].checked = false;
    }
    const checkedDays = [];
    let count = 0;
    for (let i = 0; i < this.days.length; i++) {
      if (this.days[i] != event.currentTarget && this.days[i].checked == true) {
        checkedDays.push(this.days[i].value);
        count++;
      }
    }
    if (count === 3) {
      event.currentTarget.checked = false;
      alert(`Only 3 days can be selected.You have already selected ${
        checkedDays[0]
      }, ${checkedDays[1]} and
         ${checkedDays[2]}`);
    } else {
      document.getElementById("demo").innerHTML = "";
    }
    return true;
  }
}
new Checkbox("input");
