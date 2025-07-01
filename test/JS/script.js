function load() {
    document.getElementById("Title").innerHTML = document.title;
}

function roll(par) {
    const child = document.getElementById(par.id + "-cont");
    const parent = document.getElementById(par.id);

    if (child.style.display === "none") {
        child.style.display = "block";
        parent.style.color = "rgb(94, 174, 255)";
        parent.style.background = "white";
        parent.style.border = "1px solid rgb(94, 174, 255)"
    }
    else {
        child.style.display = "none";
        parent.style.color = "white";
        parent.style.background = "rgb(94, 174, 255)";
        parent.style.border = "none"
    }
}