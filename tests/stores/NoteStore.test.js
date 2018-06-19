import React from 'react';
import NoteActions from '../../app/actions/NoteActions';
import NoteStore from '../../app/stores/NoteStore';
import alt from '../../app/libs/alt';


describe('NoteStore', () => {

  let task;

  beforeEach(() => {
    alt.flush();
    task = "test";
    NoteActions.create({ task: task });
  });

  it('should create notes', () => {
    const state = NoteStore.getState();
    expect(state.notes[0].task).toEqual(task)
  });
  it('should update notes', () => {
    // const task = 'test';
    const updatedTask = 'test 2';
    const note = NoteStore.getState().notes[0];
    NoteActions.update({...note, task: updatedTask  });
    const state = NoteStore.getState();
    expect(state.notes[0].task).toEqual(updatedTask);
  });
  it('should delete notes', () => {
    const note = NoteStore.getState().notes[0];
    NoteActions.delete(note.id);
    const state = NoteStore.getState();
    expect(state.notes.length).toBe(0);
  });
  it('should get notes by Id', () => {
    const note = NoteStore.getState().notes[0];
    const notes = NoteStore.getNotesByIds([note.id]);
    expect(notes.length).toBe(1);
    expect(notes[0].task).toEqual(task);
  });
});
