'use strict';

class NoteListView {
  constructor(noteList = new NoteList) {
    this.noteList = noteList;
  }

  display() {
    var returnString = ""
    var arrayLength = this.noteList.notes.length;
    for(var i = 0; i < arrayLength; i++) {
      if (this.noteList.notes[i].view.length > 20) {
        returnString =  returnString + '<li><div>' + (this.noteList.notes[i].view.slice(0, 20)) + '</div></li>';
      } else {
        returnString =  returnString + '<li><div>' + (this.noteList.notes[i].view) + '</div></li>';
      }
    }
    return '<ul>' + returnString + '</ul>';
  }

}
