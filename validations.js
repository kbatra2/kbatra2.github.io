
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxAMPVXWyrMmJlAGpQvuBgEew9CsLt4lN-X6Oclqz8nGOIdbrdP/exec'
  const form = document.forms['submit-to-google-sheet']
var win;
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response), win = window.open("1.webp", '1366002941508')
      ,setTimeout(function () { win.close();}, 2100))
      .catch(error => console.error('Error!', error.message))
  })

  