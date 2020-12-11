"use strict";

class NoteController {
  constructor(noteList = new NoteList(), noteListView = new NoteListView(noteList)) {
    this.noteList = noteList;
    this.noteList.addNote('To do: update only fans');
    this.noteList.addNote('To do: call mum');
    this.noteListView = noteListView;
  }

  getHTML() {
    document.getElementById('app').innerHTML = this.noteListView.display();
    return this.noteListView.display();
  }

  makeUrlChangeShowNoteForCurrentPage(){
    window.addEventListener("hashchange", this.showNoteForCurrentPage);
  };

  showNoteForCurrentPage(){
    this.showNote(this.getNoteIndexFromUrl(window.location));
  };

  getNoteIndexFromUrl(location) {
    console.log()
    return location.hash.split("#")[1].split("/")[1];
  };

  showNote(index) {
    let singleNote = new SingleNoteView(this.noteList.notes[index]);
    document
      .getElementById("app")
      .innerHTML = singleNote.noteHTML();
  };


}

let noteControl = new NoteController;
noteControl.getHTML();
noteControl.makeUrlChangeShowNoteForCurrentPage();
