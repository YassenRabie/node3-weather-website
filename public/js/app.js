console.log('Clint side js is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#messege-1')
const messageTwo = document.querySelector('#messege-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading!'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return messageOne.textContent = data.error
            }

            messageTwo.textContent = data.location
            messageOne.textContent = data.forecast.description + ', The temp is : ' + data.forecast.temp
        })
    })
})