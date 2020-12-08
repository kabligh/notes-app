'use strict';

class NoteList {
  constructor() {
    this.notes = []
  }

  addNote(text) {
    this.notes.push(new Note(text))
  }
}
