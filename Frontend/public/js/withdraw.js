/*
 * Author: Bank Bros
 * Created on: 11/07/2024
*/
const balanceUrl = "http://localhost:5255/balance"
const url = "http://localhost:5255/api/WithDrawal"
const formElement = document.querySelector("form");

async function getData(data) {
    const response = fetch(
        url, {
            method: "POST",
            body: data
        }
    );

    if (response.status == 401)
        throw new Error("Invalid pin entered.");

    if (response.staus >= 500)
        throw new Error("The server cannot process the request right now.");

    return (await response).json();
}

function handleFormSubmission(event) {
    event.preventDefault();

    const formData = new FormData(formElement);
    const data = {
        amount: formData.get("amount"),
        cardNumber: formData.get("cardno"),
        pin: formData.get("pin")
    };

    getData(data)
    .then(result => {
        alert("Your money has been credited successfully.");
    })
    .catch(error => {
        alert("Error: " + error);
    });
}

formElement.addEventListener("submit", handleFormSubmission);
