async function layTuDongNghia(tu) {
    const divDich = document.getElementById('ket-qua-dong-nghia');
    if (!divDich) return;

    divDich.innerHTML = "Đang tìm từ đồng nghĩa...";

    try {
        const url = `https://api.datamuse.com/words?rel_syn=${encodeURIComponent(tu)}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.length > 0) {
            const danhSach = data.slice(0, 5).map(item => item.word).join("<br>");
            divDich.innerHTML = "<strong></strong><br>" + danhSach;
        } else {
            divDich.innerHTML = "Không tìm thấy từ đồng nghĩa.";
        }
    } catch (error) {
        console.error("Lỗi:", error);
        divDich.innerHTML = "Lỗi kết nối khi tra từ đồng nghĩa.";
    }
}
async function layTuDongNghia(tu) {
    const divDich = document.getElementById('ket-qua-dong-nghia');
    const khungChua = document.querySelector('.cumtong'); // Chọn cái khung to bên ngoài

    if (!divDich || !khungChua) return;

    // 1. Hiện cái khung lên khi bắt đầu dịch
    khungChua.style.display = 'block'; 
    
    divDich.innerHTML = "Đang tìm từ đồng nghĩa...";

    try {
        const url = `https://api.datamuse.com/words?rel_syn=${encodeURIComponent(tu)}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.length > 0) {
            const danhSach = data.slice(0, 5).map(item => item.word).join("<br>");
            divDich.innerHTML = "<strong>Từ đồng nghĩa:</strong><br>" + danhSach;
        } else {
            divDich.innerHTML = "Không tìm thấy từ đồng nghĩa.";
        }
    } catch (error) {
        divDich.innerHTML = "Lỗi kết nối.";
    }
}