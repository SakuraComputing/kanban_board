import React from 'react';
import NoteActions from '../../app/actions/NoteActions';
import NoteStore from '../../app/stores/NoteStore';
import alt from '../../app/libs/alt';


describe('NoteStore', () => {

  let task;

  beforeEach(() => {
    alt.flush();
    task = "task";
  });

  it('should create notes', () => {
    NoteActions.create({ task });
    const state = NoteStore.getState();
    expect(state.notes[0].task).toEqual(task)
  });
  it('should update notes', () => {
    // const task = 'test';
    const updatedTask = 'test 2';
    NoteActions.create({task});
    const note = NoteStore.getState().notes[0];
    NoteActions.update({...note, task: updatedTask  });
    const state = NoteStore.getState();
    expect(state.notes[0].task).toEqual(updatedTask);
  });
  it('should delete notes', () => {
    NoteActions.create({task});
    const note = NoteStore.getState().notes[0];
    NoteActions.delete(note.id);
    const state = NoteStore.getState();
    expect(state.notes.length).toBe(0);
  });
  it('should get notes by Id', () => {

  });
});
