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

let indexSlide = 1;
showSlide(1)

;
function showSlide() {
    let bannerItems = document.getElementsByClassName('banner-item');
    if (bannerItems.length > 1) {
        bannerItems[0].style.display = 'none';
        bannerItems[1].style.display = 'block';
    } else {
        console.error("Banner items not found or insufficient number of banner items.");
    }
}