async function dichTu() {
    const input = document.getElementById('input-tu').value.trim();
    const ketQua = document.getElementById('ket-qua');

    if (!input) {
        ketQua.innerText = "Vui lòng nhập từ cần dịch!";
        return;
    }

    ketQua.innerText = "Đang tra cứu...";

    // 1. Dịch từ (MyMemory)
    try {
        const urlDich = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(input)}&langpair=en|vi`;
        const response = await fetch(urlDich);
        const data = await response.json();

        if (data.responseData && data.responseData.translatedText) {
            ketQua.innerText = "Nghĩa: " + data.responseData.translatedText;
        } else {
            ketQua.innerText = "Không tìm thấy nghĩa.";
        }
    } catch (error) {
        ketQua.innerText = "Lỗi kết nối khi dịch!";
        console.error("Lỗi dịch:", error);
    }

    // 2. Gọi hàm từ đồng nghĩa đã khai báo ở file tudongnghia.js
    await layTuDongNghia(input); 
}

// Lắng nghe phím Enter
document.getElementById("input-tu").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        dichTu();
    }
});
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#ff0000" }, // Màu của các hạt (để đỏ cho hợp với viền của bạn)
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "line_linked": { "enable": true, "distance": 150, "color": "#ff0000", "opacity": 0.4 },
    "move": { "enable": true, "speed": 2 }
  },
  "interactivity": {
    "events": { "onhover": { "enable": true, "mode": "repulse" } }
  }
});