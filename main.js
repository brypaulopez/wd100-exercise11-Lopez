function getSum() {
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);

    let result = num1 + num2;
    // alert(result);
    console.log(result);
    document.querySelector("#answer").innerHTML = "The Answer is = " + result;
}

function getDiff() {
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);

    let result = num1 - num2;
    // alert(result);
    console.log(result);
    document.querySelector("#answer").innerHTML = "The Answer is = " + result;
}

function getProduct() {
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);

    let result = num1 * num2;
    // alert(result);
    console.log(result);
    document.querySelector("#answer").innerHTML = "The Answer is = " + result;
}

function getQuotient() {
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);

    let result = num1 / num2;
    // alert(result);
    console.log(result);
    document.querySelector("#answer").innerHTML = "The Answer is = " + result;
}