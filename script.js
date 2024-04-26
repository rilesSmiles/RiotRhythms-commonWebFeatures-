
            document.addEventListener("DOMContentLoaded", function() {
                const accordionButtons = document.querySelectorAll('.accordion-button');
            
                accordionButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        const accordionItem = this.parentNode;
                        accordionItem.classList.toggle('active');

            const otherAccordionItems = document.querySelectorAll('.accordion-item');
            otherAccordionItems.forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.display = 'none';
                }
            });
        });
    });
});

