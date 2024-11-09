


async function saveJob() {
    // Capture form values
    const jobId = document.getElementById("jobId").value;
    const company = document.getElementById("company").value;
    const resume = document.getElementById("resume").files[0]; // file input
    const dateApplied = document.getElementById("dateApplied").value;
    const reference = document.getElementById("reference").checked;
    const jobDescription = document.getElementById("jobDescription").value;
    const salaryRange = document.getElementById("salaryRange").value;
    const type = document.getElementById("type").value;

    // Create a FormData object to handle the file upload
    const formData = new FormData();
    formData.append("jobId", jobId);
    formData.append("company", company);
    formData.append("resume", resume); // append the file directly
    formData.append("dateApplied", dateApplied);
    formData.append("reference", reference);
    formData.append("jobDescription", jobDescription);
    formData.append("salaryRange", salaryRange);
    formData.append("type", type);

    try {
        // Send POST request to the backend
        const response = await fetch("https://localhost:7022/jobcreate", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            alert("Job saved successfully!");
            // Clear form fields
            document.getElementById("jobFormTable").reset();
        } else {
            alert("Failed to save job. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    }
}


      
function navigateTo(page) {
    window.location.href = page; // Navigate to the specified page
}