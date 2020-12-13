// Update page so it is a list of links to notes

let newNoteList = new NoteList();
newNoteList.addNote('To do: update only fans');
newNoteList.addNote('To do: call mum');
newNoteList.addNote('Christmas shopping: make mum 2021 Hyko calendar');

let newNoteListView = new NoteListView(newNoteList);

let noteControl = new NoteController(newNoteList, newNoteListView);
noteControl.getHTML();

// Switch to single note view

makeUrlChangeShowNoteForCurrentPage();

function makeUrlChangeShowNoteForCurrentPage(){
  window.addEventListener("hashchange", showNoteForCurrentPage);
};

function showNoteForCurrentPage(){
  showNote(getNoteIndexFromUrl(window.location));
};

function getNoteIndexFromUrl(location) {
  return location.hash.split("/")[1];
};

function showNote(index) {
  let singleNote = new SingleNoteView(newNoteList.notes[index]);
  document
    .getElementById("app")
    .innerHTML = singleNote.noteHTML();
};
