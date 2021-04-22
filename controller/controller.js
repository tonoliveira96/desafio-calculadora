class Calculator {
  constructor() {
    this.btnSum = document.getElementById("sum");
    this.btnSub = document.getElementById("sub");
    this.newElement = document.getElementById("new-fields");
    this.result = document.getElementById("result");
    this.btnAddFields = document.getElementById("fields");

    this.sum();
    this.sub();
    this.clear();
    this.AddFields();
  }

  AddFields() {
    let number = document.getElementById("number");

    this.btnAddFields.addEventListener("click", (e) => {
      var value = Number(number.value);

      if (value < 2) {
        alert("O numero de campos não pode ser menor que 2");

        number.style.borderColor = "red";
      } else {
        this.newElement.innerHTML = "";
        for (var i = 1; i <= value; i++) {
          this.newElement.innerHTML += `
                        <input class="new-field" type="number" value="">
                        `;
        }
      }
    });
  }

  validetionFields(field) {
    if (field == "") {
      alert("Por favor preencha os campos!");
    }
  }

  clear() {
    document.getElementById("clear").addEventListener("click", (e) => {
      this.newElement.innerHTML = "";
      this.result.innerHTML = "";
      document.getElementById("number").value = "";
    });
  }

  sum() {
    this.btnSum.addEventListener("click", (e) => {
      let total = 0;
      document.querySelectorAll(".new-field").forEach((el) => {
        this.validetionFields(el.value);
        total += Number(el.value);
      });
      console.log(total);
      this.result.innerHTML = total;
    });
  }

  sub() {
    this.btnSub.addEventListener("click", (e) => {
      let total = 0;
      document.querySelectorAll(".new-field").forEach((el, i, array) => {
        this.validetionFields(array[i].value);
        i == 0
          ? (total = Number(array[0].value))
          : (total -= Number(array[i].value));

        console.log(array[0].value);
      });
      console.log(total);
      this.result.innerHTML = total;
    });
  }
}
