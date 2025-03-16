document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả các button có class "button-three"
    const buttons = document.querySelectorAll(".button-group .button-three");
    
    // Gắn sự kiện click cho từng button
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const type = this.getAttribute("data-type"); // Lấy giá trị từ data-type
            filterHouse(type); // Gọi hàm filterHouse với giá trị type
        });
    });

    // Hiển thị mặc định tất cả nhà khi load trang
    filterHouse("all");
});

function filterHouse(type) {
    // Lấy tất cả các phần tử có class item-check
    const items = document.querySelectorAll('.item-check');
    
    // Xóa class 'show' khỏi tất cả các phần tử
    items.forEach(item => item.classList.remove('show'));
    
    // Nếu type là 'all', hiển thị tất cả
    if (type === 'all') {
        items.forEach(item => item.classList.add('show'));
    } else {
        // Tìm tất cả các phần tử có class trùng với type
        const selectedItems = document.querySelectorAll(`.${type}`);
        selectedItems.forEach(item => item.classList.add('show'));
    }

    // Cập nhật trạng thái nút bấm
    const buttons = document.querySelectorAll(".button-group .button-three");
    buttons.forEach(button => button.classList.remove("active"));
    
    // Thêm class 'active' vào nút đang chọn
    const activeButton = document.querySelector(`[data-type="${type}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}
