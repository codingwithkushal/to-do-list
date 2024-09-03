// document.getElementsByClassName("move").style.color = "red";

const heding = document.querySelector(".move");
heding.addEventListener("click", function () {
    heding.style.color = "orange"

});

// const div = document.createElement('div');
// div.innerText = 'Hello World';
// document.body.appendChild(div);


function addItem() {
    const itemValue = document.getElementById('itemInput').value;

    if (itemValue) {

        const newDiv = document.createElement('div');
        newDiv.className = 'item d-flex justify-content-between align-items-center mb-2 p-2 bg-white border rounded';

        newDiv.innerHTML = `
            <span>${itemValue}</span>
            <button class="btn btn-danger btn-sm remove-item">X</button>`;


        document.getElementById('itemContainer').appendChild(newDiv);

       
        document.getElementById('itemInput').value = '';

        newDiv.querySelector('.remove-item').addEventListener('click', function() {
            newDiv.remove();
        });
    }
}


document.getElementById('itemInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});

document.getElementById('addToCartButton').addEventListener('click', addItem);