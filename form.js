const form = document.querySelector("#registerForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.querySelector("#username").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
    const age = document.querySelector("#age").value.trim();
    const country = document.querySelector("#country").value;
    
    const selectedGender = document.querySelector("input[name='gender']:checked");
    const selectedHobbies = document.querySelectorAll("input[name='hobbies']:checked");

    if (
        !username ||
        !email ||
        !password ||
        !age ||
        !country ||
        !selectedGender ||
        selectedHobbies.length === 0
    ) {
        alert(" Zəhmət olmasa xanaları tam doldurun!");
        return;
    }

    if (Number(age) < 18) {
        alert("Yaş 18-dən aşağı ola bilməz!");
        return;
    }

    if (password.length > 8) {
        alert("Şifrə maksimum 8 simvol olmalıdır!");
        return;
    }
    if (selectedHobbies.length === 0) {
        alert("Ən azı 1 hobbi seçilməlidir!");
        return;
    }
    const hobbiesArray = Array.from(selectedHobbies).map(cb => cb.value);

    const obj = {
        username: username,
        email: email,
        password: password,
        age: age,
        gender: selectedGender.value,
        hobbies: hobbiesArray,
        country: country
    };

    console.log(obj);
    alert("Qeydiyyat uğurla tamamlandı!");
});