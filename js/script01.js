let fullName = document.getElementById("fullName")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let password = document.getElementById("password")
let cPassword = document.getElementById("cPassword")

let array = [fullName, email, phone, password, cPassword]

document.getElementById("register").addEventListener('click', function () {

    let ret = false
    for (let el of array) {
        if (el.value.length === 0) {
            el.style.borderColor = 'red'
            ret = true
        }
    }

    if (ret) return

    if (password.value === cPassword.value) {
        document.getElementsByClassName("wrap")[0].style.display = 'none'
        document.getElementById("rs").style.display = 'block'

    } else {
        password.style.borderColor = "red"
        cPassword.style.borderColor = "red"
    }
})

for (let el of array) {
    el.addEventListener('input', function () {
        el.style.borderColor = '#B48ED7'
    })
}
