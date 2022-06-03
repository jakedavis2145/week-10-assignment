let id= 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('log');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    row.insertCell(1).innerHTML = document.getElementById('new-birth-date').value;
    let actions = row.insertCell(2);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-birth-date').value= '';
    document.getElementById('new-task').value= '';


});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Remove';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}