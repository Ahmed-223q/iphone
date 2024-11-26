let img = document.getElementById("img");
let cover = document.getElementById("cont");

function photo(x) {
  img.src = x;
  localStorage.phone = img.src;
}

function color(y) {
  cover.style.background = y;
  localStorage.bg = cover.style.background;
}

cover.style.background = localStorage.bg;
img.src = localStorage.phone;

// localStorage.removeItem('name of item')
