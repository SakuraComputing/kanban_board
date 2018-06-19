import React from 'react';
import NoteActions from '../../app/actions/NoteActions';
import NoteStore from '../../app/stores/NoteStore';
import alt from '../../app/libs/alt';


describe('NoteStore', () => {

  beforeEach(() => {
    alt.flush();
  });

  it('should create notes', () => {
    const task = "task";
    NoteActions.create({ task });
    const state = NoteStore.getState();
    expect(state.notes[0].task).toEqual(task)
  })
});
