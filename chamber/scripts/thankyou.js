document.addEventListener('DOMContentLoaded', () => {
    
    if (window.location.pathname.includes('thankyou.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const submittedInfo = document.querySelector('#submitted-info');
        const submissionDateTime = document.getElementById('submission-datetime');
        const formData = {
            'First Name': urlParams.get('fname'),
            'Last Name': urlParams.get('lname'),
                        'Email': urlParams.get('email'),
            'Phone': urlParams.get('phone'),
            'Business Name': urlParams.get('bname'),
                    };

        let infoHtml = '<ul>';
        for (const [key, value] of Object.entries(formData)) {
            infoHtml += `<li><strong>${key}:</strong> ${value}</li>`;
        }
        infoHtml += '</ul>';
        submittedInfo.innerHTML = infoHtml;

        const dateTime = urlParams.get('dateTime');
        submissionDateTime.innerHTML = `<p><strong>Date and Time:</strong> ${dateTime}</p>`;
    }
});