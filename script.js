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
  <nav style="position:fixed;top:0;left:0;width:100%;background:black;z-index:1000;padding:20px 0;display:flex;justify-content:space-between;align-items:center;">
    <div style="margin-left:30px;font-weight:bold;color:#ff1b1b;">My Website</div>
    <div id="menu-icon" style="margin-right:30px;cursor:pointer;font-size:26px;">&#9776;</div>
    <ul id="menu-list" style="
      list-style:none;
      position:absolute;
      top:70px;
      right:30px;
      background:black;
      border:2px solid #ff1b1b;
      border-radius:8px;
      padding:10px;
      display:none;
      flex-direction:column;
      width:280px;
      text-align:left;
    ">
    <li style="margin:10px 0;"><a href="index.html" style="color:#ff1b1b;text-decoration:none;">Home</a></li>
    <li style="margin:10px 0;"><a href="indek.html/#projects" style="color:#ff1b1b;text-decoration:none;">Projects</a></li>
    <li style="margin:10px 0;"><a href="indek.html/#contact" style="color:#ff1b1b;text-decoration:none;">Contact</a></li>
    <li style="margin:10px 0;"><a href="mengenal.html" style="color:#ff1b1b;text-decoration:none;">Get to know HTML, CSS, Javascript & Tailwind</a></li>
    <li style="margin:10px 0;"><a href="tata-cara.html" style="color:#ff1b1b;text-decoration:none;">How to Create a Website</a></li>
    <li style="margin:10px 0;"><a href="kesan-pesan.html" style="color:#ff1b1b;text-decoration:none;">Learning Impressions & Messages</a></li>
    </ul>
  </nav>
`;

// Insert navbar into the page (only ONCE)
document.getElementById("navbar").innerHTML = navbarHTML;

// Dropdown logic (after navbar is inserted)
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  const isVisible = menuList.style.display === "flex";
  menuList.style.display = isVisible ? "none" : "flex";
});

// Optional: Close menu when a link is clicked (for better UX)
menuList.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuList.style.display = "none";
  });
});
