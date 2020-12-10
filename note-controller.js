"use strict";

class NoteController {
  constructor(noteList = new NoteList(), noteListView = new NoteListView(noteList)) {
    this.noteList = noteList;
    this.noteList.addNote('To do: update only fans');
    this.noteListView = noteListView;
  }

  getHTML() {
    document.getElementById('app').innerHTML = this.noteListView.display();
    return this.noteListView.display();
  }
}

let noteControl = new NoteController();
noteControl.getHTML();
