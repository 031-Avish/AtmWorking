const url = "http://localhost:5255/api/Deposit";
const formElement = document.querySelector("form");

async function getData(data) {
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
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
    // console.log("amount: ", formData.get("amount"));
    const data = {
        amount: formData.get("amount"),
        cardNumber: formData.get("cardno"),
        pin: formData.get("pin")
    };

    getData(data)
    .then(result => {
        // console.log(result);
        alert("Your money has been deposited successfully. Your new balance is: " + result.currentBalance);
        window.location.href = "/index.html";
    })
    .catch(error => {
        alert("Error Qccured !!  " + error.message);
    });
}

formElement.addEventListener("submit", handleFormSubmission);
