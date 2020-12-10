"use strict";

class NoteController {
  constructor(noteList = new NoteList()) {
    this.noteList = noteList
    this.noteList.addNote('To do: update only fans')
    this.noteListView = new NoteListView(noteList)
  }

  getHTML() {
    document.getElementById('app').innerHTML = this.noteListView.display();
  }
}

let noteController = new NoteController();
noteController.getHTML();
