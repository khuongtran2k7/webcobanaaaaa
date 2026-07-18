// File: main.js
async function xuLyChinh() {
    const input = document.getElementById('input-tu').value.trim();
    const divNghia = document.getElementById('hien-thi-nghia');
    
    // Lưu ý: divDongNghia ở đây ta trỏ đúng ID mà bạn đã đặt trong HTML
    const divDongNghia = document.getElementById('ket-qua-dong-nghia');

    if (!input) {
        divNghia.innerText = "Vui lòng nhập từ!";
        return;
    }

    divNghia.innerText = "Đang dịch...";
    
    // Gọi hàm từ translator.js
    const nghia = await dichNghia(input);
    divNghia.innerText = "Nghĩa: " + nghia;

    // Gọi hàm từ tudongnghia.js (hàm này tự lo việc đổ dữ liệu vào divDongNghia)
    await layTuDongNghia(input);
}

// Lắng nghe sự kiện Enter
document.getElementById("input-tu").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); // Ngăn chặn form tự load lại trang
        xuLyChinh();
    }
});