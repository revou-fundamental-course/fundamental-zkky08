function validateForm() {
    let firstName = document.getElementById('firstname').value; //cara kedua selain pakai getElementById bisa pakai querySelector dan jangan lupa ditambahkan *#* untuk mengambil id dan *.* untuk class
    let lastName = document.getElementById('lastname').value;

    console.log(firstName);
    console.log(lastName);

    if (firstName != '' && lastName != '') {
       document.getElementById('result').innerHTML = firstName + ' ' + lastName;
    } else {
        alert('Inputan ada yang kosong');
    }
}

function showSlide() {
    document.getElementsByClassName('banner-item')[0].style.display = 'none';
    document.getElementsByClassName('banner-item')[1].style.display = 'block';
}