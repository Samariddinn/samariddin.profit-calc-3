// phase of getting all variables
const itemEl = document.querySelector('.item');
const boughtItemPriceEl = document.querySelector('.bought-item__price');
const sellingItemEl = document.querySelector('.selling-item');
const profitBtn = document.querySelector('.benefit-btn');
const profitText = document.querySelector('.profit__text');
const resetBtn = document.querySelector('.reset__btn');
const numberModal = document.querySelector('.modal');
const closeBtn = document.querySelector('.fa-xmark');
const assistantIcon = document.querySelector('.fa-regular');

// When the input item has number
itemEl.addEventListener('input', function () {
    // Check if input contains numbers
    if (/\d/.test(itemEl.value)) {
        // Remove numbers from input
        itemEl.value = itemEl.value.replace(/\d/g, '');
        
        // Show modal
        numberModal.style.transform = 'translateY(0px)';
    }
});

// Close button;
closeBtn.addEventListener('click', function(e) {
    numberModal.style.transform = 'translateY(-650px)';
})

// When the esc keyword clicked
document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        numberModal.style.transform = 'translateY(-650px)';
    }
})


// When button clicks
profitBtn.addEventListener('click', function() {
    const boughtPrice = parseFloat(boughtItemPriceEl.value);
    const sellingPrice = parseFloat(sellingItemEl.value);

    const generalVal =  sellingItemEl.value - boughtItemPriceEl.value;
    if(!itemEl.value || !boughtItemPriceEl.value || !sellingItemEl.value) { 
        profitText.textContent = 'Please fill in all fields!';
        profitText.style.color = 'red';
    } //When input fields do not fill in.
    else if(boughtPrice < 0 || sellingPrice < 0) {
        alert(`Numbers can't be negative!`);
        boughtItemPriceEl.value = '';
        sellingItemEl.value = '';
    }
    else if (generalVal > 0) {
          profitText.textContent = `The item sold to ${sellingItemEl.value}, and this is your profit🔥 : ${generalVal}`
    }   // When their value equal to zero
    else if (generalVal === 0) {
        profitText.textContent = `No profit or loss `;
        profitText.style.color = 'orange';
    } // When there is a minus cash
    else {
        profitText.textContent = `Unfortunately, you are burdened with debt😄`;
    }

    assistantIcon.style.marginLeft = '70px';

})


// Reset
resetBtn.addEventListener('click', function() {
    itemEl.value = '';
    boughtItemPriceEl.value = '';
    sellingItemEl.value = '';

    profitText.textContent = '';
    assistantIcon.style.marginLeft = '260px';
})