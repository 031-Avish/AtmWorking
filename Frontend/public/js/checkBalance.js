
const url = "http://localhost:5255/balance";
const formElement = document.querySelector("form");

async function getData(data) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) { // Check if response status is not OK (i.e., >= 400)
        const errorData = await response.json();
        if (response.status >= 400 && response.status < 500) {
            throw new Error(errorData.message || "Client-side error occurred.");
        }
        if (response.status >= 500) {
            throw new Error("The server cannot process the request right now.");
        }
    }

    return response.json();
}

function handleFormSubmission(event) {
    event.preventDefault();

    const formData = new FormData(formElement);
    const data = {
        cardNumber: formData.get("cardno"),
        pin: formData.get("pin")
    };

    getData(data)
    .then(result => {
        alert("Your current balance is: $" + result.balance);
        window.location.href = "/index.html";
    })
    .catch(error => {
        alert("Error: " + error.message);
    });
}

formElement.addEventListener("submit", handleFormSubmission);
