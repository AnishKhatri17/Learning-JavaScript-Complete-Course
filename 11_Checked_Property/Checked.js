// JavaScript Program to execute checked properties .....

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `Thanks, you have subscribed` ;
    }

    else{
        subResult.textContent = `You have NOT subscribed !`;
    }

    if(visaBtn.checked){
        payResult.textContent = `You have paid via VISA`;
    }

    else if(masterCardBtn.checked){
        payResult.textContent = `You have paid via MASTERCARD`;
    }

    else if(payPalBtn.checked){
        payResult.textContent = `You have paid via PAYPAL`;
    }

    else{
        payResult.textContent =`You have not made any Payments !!!`;
    }
}