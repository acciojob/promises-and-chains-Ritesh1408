let ageInput = document.getElementById("age");
let nameInput = document.getElementById("name");
let submitButton = document.getElementById("btn");

submitButton.addEventListener("click", function handleSubmit() {
    let ageValue = parseInt(ageInput.value);
    let nameValue = nameInput.value.trim();

    // Validation for empty fields
    if (!nameValue || isNaN(ageValue)) {
        alert("Please enter valid details.");
        return;
    }

    // Creating the promise
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ageValue > 18) {
                resolve(`Welcome, ${nameValue}. You can vote.`);
            } else {
                reject(`Oh sorry ${nameValue}. You aren't old enough.`);
            }
        }, 4000);
    });

    // Handling promise resolution
    myPromise
        .then((message) => alert(message))
        .catch((error) => alert(error));
});
