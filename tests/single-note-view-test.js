'use strict';

let noteDouble = new Note("Buy Christmas presents");
let singleNoteView = new SingleNoteView();
let singleNoteViewDouble = new SingleNoteView(noteDouble);

it('takes a note as a parameter when instantiated', function(){
  expect(singleNoteView.note instanceof Note).toEqual(true);
})

it('returns an HTML string of the note itself', function(){
  expect(singleNoteViewDouble.noteHTML()).toEqual('<div>Buy Christmas presents</div>');
})
