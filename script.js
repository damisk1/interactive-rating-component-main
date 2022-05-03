const ratingButtons = document.querySelectorAll('.rating-button');
const submitButton = document.querySelector('.submit-button');
const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');
const result = document.querySelector('.result span');

card2.style.display= 'none';

submitButton.addEventListener('click', function(){
    let selected = document.querySelector('.selected');
    
    if(!selected) {
        alert('Please, rate our service! 😃');
    } else {
        result.textContent = selected.textContent;
        card1.classList.add('hide');
        card2.style.display ='flex';
    }
})


ratingButtons.forEach(btn => {
    btn.addEventListener('click', function(e){
        ratingButtons.forEach(btn => {
            btn.classList.remove('selected');
        })
        e.target.classList.add('selected');
    });
    
});
