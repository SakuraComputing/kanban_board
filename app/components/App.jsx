import React from 'react';
import '../../styles/styles.scss';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.addNote = this.addNote.bind(this);

    this.state = {
      notes: [
        {
          id: 1,
          task: 'Learn Webpack',
        },
        {
          id: 2,
          task: 'Learn React',
        },
        {
          id: 3,
          task: 'Do Laundary',
        },
      ],
    };
  }

  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: 4,
        task: 'New Task'
      }])
    })
  };

  render() {

    const notes = this.state.notes;

    return (
      <div>
        <button onClick={this.addNote}>Add a new note</button>
        <ul>{notes.map(note => <li key={note.id}>{note.task}</li>)}
        </ul>
      </div>
    );
  }

}
export default App;

