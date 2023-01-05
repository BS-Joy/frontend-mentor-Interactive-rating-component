let rated = 0

document.getElementById('rating-container').addEventListener('click', event => {
    // event.preventDefault();
    document.querySelectorAll('.rate').forEach(element => {
        element.classList.remove('active');
    })
    if(event.target.classList == 'rate'){
        rated = event.target.innerText;
        event.target.classList.add('active')
    }
});

function submitHandle(){
    console.log(rated);
    document.getElementById('rating-page').style.display = 'none';

    document.getElementById('thankyou-page').style.display = 'block';

    document.getElementById('rated').innerText = `You selected ${rated} out of 5`;
}