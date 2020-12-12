"use strict";

class NoteController {
  constructor(noteList = new NoteList(), noteListView = new NoteListView(noteList)) {
    this.noteList = noteList;
    this.noteListView = noteListView;
  }

  getHTML() {
    document.getElementById('app').innerHTML = this.noteListView.display();
    return this.noteListView.display();
  }
}
