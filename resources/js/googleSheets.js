function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwlJ-qXf5mQToKQSMK60OTaLtVLVl2bcQ0VUtYv8mTDWmgtfiompi9lccczzkw4H0ud/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')
 
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = true
      btn.innerHTML = "Sending..."

      let fd = getData(false)
      console.log("DATA", fd)
      for (const [key, value] of fd) {
        console.log(`${key}: ${value}\n`);
      }

      fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: fd })
        .then(response => { 
              alert('Success!', response) })
        .catch(error => {
              alert('Error!', error.message)})

      btn.disabled = false
      btn.innerHTML = "Send to Google Sheets"
    })
}
