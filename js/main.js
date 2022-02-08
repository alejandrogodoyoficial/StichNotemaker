document.getElementById('formNote').addEventListener('submit', saveNote);

function saveNote(e) {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  console.log(description)

  let note = {
    title,
    description
  };

  if(localStorage.getItem('notes') === null) {
    let notes = [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
  } else {
    let notes = JSON.parse(localStorage.getItem('notes'));
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  getnotes();
  document.getElementById('formNote').reset();
  e.preventDefault();
}

function deleteNote(title) {
  console.log(title)
  let notes = JSON.parse(localStorage.getItem('notes'));
  for(let i = 0; i < notes.length; i++) {
    if(notes[i].title == title) {
      notes.splice(i, 1);
    }
  }
  
  localStorage.setItem('notes', JSON.stringify(notes));
  getnotes();
}

function getnotes() {
  let notes = JSON.parse(localStorage.getItem('notes'));
  let notesView = document.getElementById('notes');
  notesView.innerHTML = '';
  for(let i = 0; i < notes.length; i++) {
    let title = notes[i].title;
    let description = notes[i].description;

    notesView.innerHTML += `
        <div class="noteBody">
          <h1 class="noteTitle">${title}</h1>
          <p class="noteDescription">${description}
          </p>
          <a href="#" onclick="deleteNote('${title}')" class="submit deleteNote">Delete</a>
        </div>
        `;
  }
}

getnotes();

const stich = document.querySelector(".stich");
const stich2 = document.querySelector(".stich2")

stich.addEventListener('click', function (){
    document.querySelector(".navItems").style.display = 'block';
    document.querySelector(".navName").style.flexDirection = 'column';
    document.querySelector(".linkName").style.alignSelf = 'center';
    stich2.style.display = 'block';
    stich.style.display = 'none';
})
stich2.addEventListener('click', function (){
    document.querySelector(".navItems").style.display = 'none';
    stich2.style.display = 'none';
    stich.style.display = 'block';
})

