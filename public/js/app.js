const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')


weatherForm.addEventListener('submit',(e) => {
    e.preventDefault()
    const location = search.value
    fetch('http://localhost:3000/weather?address='+location).then((data) => {
        return data.json()
    }).then((data) => {
        message1.textContent = data.latitude
        message2.textContent = data.longitude
    })
    search.value = ''
})