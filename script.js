let text = "Web Design";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 150);
    }
}
type();

function toggleTheme() {

    document.body.classList.toggle("dark");

    let btn = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark")) {
        btn.innerHTML = "☀️";
    } else {
        btn.innerHTML = "🌙";
    }

}
// document.addEventListener("click", function(event){

//     let menu = document.getElementById("menuBox");
//     let menuBtn = document.querySelector(".menu");

//     if(!menu.contains(event.target) && !menuBtn.contains(event.target)){
//         menu.classList.remove("active");
//     }

// });

function toggleMenu(event) {
    event.stopPropagation();
    document.getElementById("menuBox").classList.toggle("active");
}

document.getElementById("menuBox").addEventListener("click", function (e) {
    e.stopPropagation();
});

document.addEventListener("click", function () {
    document.getElementById("menuBox").classList.remove("active");
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value
    };

    const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

   if(result.success) {window.location.href = "thanks.html";}
    else{alert("Registration Failed");
        
    }
});
