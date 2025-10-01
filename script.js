// Array of image pairs for each slot
const images = [
  ["img/myphoto1.png", "img/myphoto1b.png"],
  ["img/myphoto2.png", "img/myphoto2b.png"],
  ["img/myphoto3.png", "img/myphoto3b.png"],
];

let toggle = false;

setInterval(() => {
  toggle = !toggle;
  for (let i = 0; i < images.length; i++) {
    document.getElementById(`img${i + 1}`).src = images[i][toggle ? 1 : 0];
  }
}, 2000); //perdetik

// Navbar HTML
const navbarHTML = `
  <nav>
    <ul style="list-style:none;display:flex;justify-content:center;padding:0;margin:0;">
      <li style="margin:0 15px;"><a href="index.html" style="color:#ff1b1b;text-decoration:none;">Home</a></li>
      <li style="margin:0 15px;"><a href="#" style="color:#ff1b1b;text-decoration:none;">About</a></li>
      <li style="margin:0 15px;"><a href="#projects" style="color:#ff1b1b;text-decoration:none;">Projects</a></li>
      <li style="margin:0 15px;"><a href="#contact" style="color:#ff1b1b;text-decoration:none;">Contact</a></li>
    </ul>
  </nav>
`;


// Insert navbar into the page
document.getElementById("navbar").innerHTML = navbarHTML;
