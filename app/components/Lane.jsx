import React, { Component } from 'react';
import AltContainer from 'alt-container';
import {DropTarget} from 'react-dnd';
import PropTypes from 'prop-types';
import ItemTypes from '../constants/itemTypes';
import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import LaneActions from '../actions/LaneActions';
import Editable from './Editable';

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;


    if(!targetProps.lane.notes.length) {
      LaneActions.attachToLane({
        laneId: targetProps.lane.id,
        noteId: sourceId
      })
    }
  }
};

@DropTarget(ItemTypes.NOTE, noteTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))
class Lane extends Component {

  editNote = (id, task) => {
    if(!task.trim()) {
      NoteActions.update({id, editing: false});

      return;
    }
    NoteActions.update({id, task, editing: false});
  };


  // Arrow function would not work here
  addNote = (e) =>  {

    e.stopPropagation();

    const laneId = this.props.lane.id;
    const note = NoteActions.create({ task: 'New task'});

    LaneActions.attachToLane({
      noteId: note.id,
      laneId
    })
  };

  editName = (name) => {
    const laneId = this.props.lane.id;

    if(!name.trim()) {
      LaneActions.update({id: laneId, name ,editing: false});

      return;
    }

    LaneActions.update({id: laneId, name, editing: false});
  };

  deleteNote = (noteId, e) => {
    e.stopPropagation();

    const laneId = this.props.lane.id;

    LaneActions.detachFromLane({laneId, noteId});
    NoteActions.delete(noteId);
  };


  deleteLane = () => {
    const laneId = this.props.lane.id;

    LaneActions.delete(laneId);
  };
  activateLaneEdit = () => {
    const laneId = this.props.lane.id;

    LaneActions.update({id: laneId, editing: true});
  };

  activateNoteEdit(id) {
    NoteActions.update({id, editing: true})
  }

  render() {

    const {connectDropTarget, lane, ...props} = this.props;

    return connectDropTarget(
      <div {...props}>
        <div className="lane-header" onClick={this.activateLaneEdit}>
          <div className="lane-add-note">
            <button onClick={this.addNote}>+</button>
          </div>
          <Editable className="lane-name"
            editing={lane.editing}
            value={lane.name}
            onEdit={this.editName}
          />
          <div className="lane-delete">
            <button onClick={this.deleteLane}>x</button>
          </div>
        </div>
        <AltContainer
          stores={[NoteStore]}
          inject={{
            notes: () => NoteStore.getNotesByIds(lane.notes)
          }}
        >
          <Notes
            onValueClick={this.activateNoteEdit}
            onEdit={this.editNote}
            onDelete={this.deleteNote}
          />
        </AltContainer>
      </div>
    );
  }
}

Lane.propTypes = {
  lane: PropTypes.shape ({
     id: PropTypes.string.isRequired,
     editing: PropTypes.bool,
     name: PropTypes.string,
     notes: PropTypes.array
  }).isRequired,
  connectDropTarget: PropTypes.func,
};
Lane.defaultProps = {
  name: '',
  notes: []
};

export default Lane;

Lane.Header = class LaneHeader extends React.Component {

};


Lane.Notes = class LaneNotes extends React.Component {

};


