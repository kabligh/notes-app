'use strict';

class NoteListView {
  constructor(noteList = new NoteList) {
    this.noteList = noteList;
  }

  display() {
    var returnString = ""
    var arrayLength = this.noteList.notes.length;
    for(var i = 0; i < arrayLength; i++) {
      returnString =  returnString + `<li><div id="${i}"><a href="#notes/${i}">` + (this.noteList.notes[i].view.slice(0, 20)) + '</a></div></li>';
    }
    return '<ul>' + returnString + '</ul>';
  }


}
