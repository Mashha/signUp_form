let form = document.querySelector('#form')
let password1 = document.getElementById('password1')
let password2 = document.getElementById('password2')

//prevent a form to be submitted
form.addEventListener('submit', function (e) {
  e.preventDefault()

  //check if passwords match
  function matchPassword() {
    if (password1.value != password2.value) {
      alert('Password did not match: Please try again...')
      return false
    } else {
      alert('Password created successfully')
      return true
    }
  }

  matchPassword()
})
