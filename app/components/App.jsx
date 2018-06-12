import React from 'react';
import Notes from './Notes';

import '../../styles/styles.scss';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export class App extends React.Component {
  constructor(props) {
    super(props);


      this.state = NoteStore.getState();
  }


  componentDidMount() {
    NoteStore.listen(this.storeChanged)
  }


  componentWillUnmount() {
    NoteStore.unlisten(this.storeChanged)
  }

  storeChanged = (state) => {
    this.setState(state);
  };


  addNote = () => {
    NoteActions.create({task: 'New Task'})
  };

  editNote = (id, task) => {
    //Don't do anything if nothing passed in!
    if(!task.trim()){
      return;
    }
    NoteActions.update({id, task})
  };

  deleteNote = (id, e) => {
    // Avoid Bubbling to edit
    e.stopPropagation();

    NoteActions.delete(id);
  };

  render() {

    const notes = this.state.notes;

    return (
      <div>
        <button className="add-note" onClick={this.addNote}>Add a new note</button>
        <Notes notes={notes}
               onEdit={this.editNote}
               onDelete={this.deleteNote}
        />
      </div>
    );
  }

}
export default App;

