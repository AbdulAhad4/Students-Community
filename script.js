// Styling the exclamation mark
let exclamation = document.getElementById("exclamation01");
setInterval(() => {
    if (exclamation.style.display === "none") {
        exclamation.style.display = "block";
      } else {
        exclamation.style.display = "none";
      }
}, 2000)

// Rewriting effect on the intro
let indetity = document.getElementById("identity");
setInterval(() => {
    if (indetity.innerHTML == "CANTONMANIANS") {
        indetity.innerHTML = "AMBITIOUS STUDENTS";
        indetity.style.color = "#ae9d0e";
    }
    else if (indetity.innerHTML == "AMBITIOUS STUDENTS") {
        indetity.innerHTML = "THE FUTURE LEADERS";
        indetity.style.color = "yellow";
    }
    else {
        indetity.innerHTML = "CANTONMANIANS"
        indetity.style.color = "green";
    }
}, 2000)