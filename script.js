function convertGrade() {
    const grade = parseFloat(document.getElementById('gradeInput').value);
    const resultDiv = document.getElementById('result');
    const loadingDiv = document.getElementById('loading');

    // Clear previous result and show loading animation
    resultDiv.innerHTML = '';
    loadingDiv.style.display = 'block';

    // Define the grade mapping
    const gradeMapping = {
        1.00: { range: "98 - 100", text: "Superior" },
        1.25: { range: "95 - 97", text: "" },
        1.50: { range: "92 - 94", text: "" },
        1.75: { range: "89 - 91", text: "Above average" },
        2.00: { range: "86 - 88", text: "" },
        2.25: { range: "83 - 85", text: "Average" },
        2.50: { range: "80 - 82", text: "" },
        2.75: { range: "77 - 79", text: "" },
        3.00: { range: "75 - 76", text: "" },
        4.00: { range: "70 - 74", text: "Conditional Failure/Incomplete" },
        5.00: { range: "70 - 74", text: "Conditional Failure/Incomplete" }
    };

    setTimeout(() => {
        // Hide loading animation
        loadingDiv.style.display = 'none';

        // Check if the grade is in the mapping
        if (gradeMapping[grade]) {
            const { range, text } = gradeMapping[grade];
            resultDiv.innerHTML = `${range} ${text}`;
        } else {
            resultDiv.innerHTML = "Invalid grade";
        }
    }, 2000); // Simulate loading time
}