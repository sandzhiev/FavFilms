var list = [];
var film = document.getElementById('film');

var addDelete = function() {
    if (film.value !== '' && list.length < 5) {
        var deleteBtn = document.createElement('button');
        deleteBtn.innerText = "X";
        deleteBtn.setAttribute('id', 'deletebtn');
        list.push(1);
        //create list
        var node = document.createElement('li');
        var textnode = document.createTextNode(film.value);
        node.appendChild(deleteBtn);
        node.appendChild(textnode);
        
        document.getElementById('list').appendChild(node);
        
        film.value = '';
        
        
        
        var deleteTask = function() {
        var listItem = this.parentNode;
        var ul = listItem.parentNode;

        //Remove the parent list item from the ul
        ul.removeChild(listItem);
        list.splice(this, 1);
        if (list.length === 0) {
            document.getElementById('more').style.display = 'none';
            }
        
        };
        
        deleteBtn.onclick = deleteTask;
        
        More();
    }
};



document.getElementById('add').onclick = addDelete;
film.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        addDelete();
        
    }
});

var More = function () {
    if (list.length > 0) {
        document.getElementById('more').style.display = 'block';
    } 
}







