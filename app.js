
// Manual regular expressions for matching UK format postcodes and phone numbers without using HTML5 input types

document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('post').addEventListener('blur', validatePost);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {

    const name = document.getElementById('name');
    const re = /^[a-zA-Z ]{2,30}$/;

    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    }else {
        name.classList.remove('is-invalid');
    }
}

function validatePost() {

    const post = document.getElementById('post');
    const re = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;
    
    if(!re.test(post.value)){
        post.classList.add('is-invalid');
    }else {
        post.classList.remove('is-invalid');
    }

}

function validateEmail() {

    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)){
        email.classList.add('is-invalid');
    }else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    const re = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/;

    if(!re.test(phone.value)){
        phone.classList.add('is-invalid');
    }else {
        phone.classList.remove('is-invalid');
    }
}
