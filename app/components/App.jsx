import React from 'react';


export class App extends React.Component {
  constructor(props) {
    super(props);

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

  render() {
    return (
      <div>
        <button>Add a new note</button>
        <ul>{this.state.notes.map(note => <li key={note.id}>{note.task}</li>)}
        </ul>
      </div>
    );
  }
}
export default App;

