document.addEventListener('DOMContentLoaded', function() {

    // Isotope filter
    const isotopeContainer = document.querySelector('.isotope-container');
    var iso;

    if (isotopeContainer) {

        iso = new Isotope(isotopeContainer, {
            itemSelector: '.item-check', //Chọn bộ lọc, ở đây là tất cả item có class 'item-check'
            layoutMode: 'fitRows' //Hoặc masonry nếu bạn muốn layout dạng masonry
        });
       
    }

    //Lọc và animation
    const filterButtons = document.querySelectorAll('.button-group .button');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filterValue = button.getAttribute('data-type');
            iso.arrange({ 
                filter: filterValue === 'all' ? '*' : `.${filterValue}` 
            });

            //Thêm active
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });

    });
});