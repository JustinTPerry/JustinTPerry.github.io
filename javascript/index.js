let emailCollectorForm = document.getElementById("Opt-In")

emailCollectorForm.addEventListener("submit",
    function emailSubmitHandler(event) {
        event.preventDefault()

        let formData = new FormData(event.target)

        let userFirstName = formData.get("firstName")
        let userEmailAddress = formData.get("emailAddress")

        let updatedHtmlContent = 
        `
            <h2 class="subtitle">Congratulations, ${userFirstName}!</h2>
            <p class="subtitle-reminder">You're on your way to becoming a BBQ Master!</p>

            <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
        `
        document.getElementById("Content").innerHTML = updatedHtmlContent
        emailCollectorForm.removeEventListener("submit", emailSubmitHandler)
    })