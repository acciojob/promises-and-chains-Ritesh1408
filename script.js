document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let ageValue = parseInt(document.getElementById("age").value);
    let nameValue = document.getElementById("name").value.trim();

    // Validation for empty fields
    if (!nameValue || isNaN(ageValue)) {
        alert("Please enter valid details"); // Removed the period
        return;
    }

    // Creating the promise
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ageValue > 18) {
                resolve(`Welcome, ${nameValue}. You can vote.`);
            } else {
                reject(`Oh sorry ${nameValue}. You aren't old enough.`);
            }
        }, 4000);
    })
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
