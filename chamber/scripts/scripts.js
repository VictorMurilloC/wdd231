function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

const last_modif = new Date(document.lastModified);
document.querySelector("#last-modified").textContent = `Last Modification: ${document.lastModified}`;

const currentYear = new Date().getFullYear();
document.querySelector('.currentYear').textContent = currentYear;