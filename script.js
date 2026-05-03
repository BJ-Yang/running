// 平滑捲動效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 簡單的導覽列陰影效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const body = document.body;

// 開啟選單
function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    body.classList.add('no-scroll'); // 防止底層網頁捲動
}

// 關閉選單
function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll');
}

menuOpen.addEventListener('click', openSidebar);
menuClose.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar); // 點擊深色遮罩也能關閉
