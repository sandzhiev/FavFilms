
var list = [];
var film = document.getElementById('film');

var addDelete = function() {
    if (film.value !== '' && list.length < 5) {
        var deleteBtn = document.createElement('button');
        deleteBtn.innerText = "X";
        deleteBtn.setAttribute('id', 'deletebtn');
        list.push(film.value);
        //create list
        var node = document.createElement('li');
        var textnode = document.createElement('p');
        textnode.innerText = film.value;
        textnode.setAttribute('id', 'listEl');
        
        node.appendChild(deleteBtn);
        node.appendChild(textnode);
        
        document.getElementById('list').appendChild(node);
        
        film.value = '';
        
        var deleteTask = function() {
        var listItem = this.parentNode;
        var ul = listItem.parentNode;
        
        var a = this.nextSibling.innerText;
        var b = list.indexOf(a);
        list.splice(b, 1);

        //Remove the parent list item from the ul
        ul.removeChild(listItem);
        
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

document.getElementById('more').onclick = function() {
    document.getElementById('container').style.display = 'none';
    
    for (let i = 0;i <= list.length-1;i++) {
        fetch('http://www.omdbapi.com/?apikey=4dea959b&t=' + encodeURI(list[i]))
            .then(result => {
            return result.json();
            })
            .then(data => {
            //console.log(data);
            const title = data.Title;
            const year = data.Year;
            const director = data.Director;
            const actors = data.Actors;
            const plot = data.Plot;
            const rating = data.imdbRating;
            const poster = data.Poster;
            
            const result = document.createElement('div')
            result.setAttribute('id', 'result')
            //document.getElementById('result').style.display = 'block';

            const h2 = document.createElement('h2')
            h2.textContent = title;

            const p1 = document.createElement('p')
            p1.textContent = 'Year: ' + year;
            
            const p2 = document.createElement('p')
            p2.textContent = 'Director: ' + director;
            
            const p3 = document.createElement('p')
            p3.textContent = 'Actors: ' + actors;
            
            const p4 = document.createElement('p')
            p4.textContent = 'Imdb Rating: ' + rating;
            
            const p5 = document.createElement('p')
            p5.textContent = 'Plot: ' + plot;
            
            const img = document.createElement('img')
            if (poster !== 'N/A') {
                img.setAttribute('src', poster);
            } else {
                img.setAttribute('src', 'https://image.shutterstock.com/image-vector/no-image-available-sign-internet-260nw-261719003.jpg');
            }
            
            const redo = document.createElement('div')
            redo.setAttribute('id', 'redo')
            redo.innerHTML = '<a href="/index.html"><i class="fas fa-redo-alt"></i></a>';
            
 
            body.appendChild(result);
            body.appendChild(redo);
            result.appendChild(img);
            result.appendChild(h2);
            result.appendChild(p1);
            result.appendChild(p2);
            result.appendChild(p3);
            result.appendChild(p4);
            result.appendChild(p5);
            
            
            })
            
            .catch(error => console.log(error));
    }
     
}

    
    










