import uuidv4 from 'uuid/v4';
import alt from '../libs/alt';
import LaneActions from '../actions/LaneActions';
import update from 'react-addons-update';

class LaneStore {
  constructor() {
    this.bindActions(LaneActions);

    this.lanes = [];

  }
  create(lane) {
    const lanes = this.lanes;

    lane.id = uuidv4();
    lane.notes =lane.notes || [];

    this.setState({
      lanes: lanes.concat(lane)
    });
  }
  update(updatedLane) {
    const lanes = this.lanes.map(lane => {
      if(lane.id === updatedLane.id) {
        return Object.assign({}, lane, updatedLane);
      }
      return lane;
    });

    this.setState({lanes});
  }

  delete(id) {
    this.setState({
      lanes: this.lanes.filter(lane => lane.id !== id)
    })
  }

  attachToLane({laneId, noteId}) {
    if(!noteId) {
      this.waitFor(NoteStore);

      noteId = NoteStore.getState().notes.slice(-1)[0].id;
    }

    const lanes = this.lanes;
    const targetId = this.findLane(laneId);

    if(targetId < 0) {
      return;
    }

    this.removeNote(noteId);

    const lane = lanes[targetId];

    if(lane.notes.indexOf(noteId) === -1) {
      lane.notes.push(noteId);

      this.setState({lanes});
    }
    else {
      console.warn('Already attached note to lane', lanes);
    }
  }

  removeNote(noteId) {
    const lanes = this.lanes;
    const removeLane = lanes.filter((lane) => {
      return lane.notes.indexOf(noteId) >= 0;
    })[0];

    if(!removeLane) {
      return;
    }

    const removeNoteIndex = removeLane.notes.indexOf(noteId);

    removeLane.notes = removeLane.notes.slice(0, removeNoteIndex).
    concat(removeLane.notes.slice(removeNoteIndex + 1));
  }



  detachFromLane({laneId, noteId}) {
    const lanes = this.lanes.map(lane => {
      if(lane.id === laneId) {
        lane.notes = lane.notes.filter(note => note !== noteId)
      }

      return lane;
    });

    this.setState({lanes})
  }

  findLane(id) {
    const lanes = this.lanes;
    const laneIndex = lanes.findIndex((lane) => lane.id === id);

    if(laneIndex < 0) {
      console.warn('Failed to find lane', lanes, id);
    }

    return laneIndex;
  }


  move({sourceId, targetId}) {
    const lanes = this.lanes;
    const sourceLane = lanes.filter(lane => lane.notes.includes(sourceId))[0];
    const targetLane = lanes.filter(lane => lane.notes.includes(targetId))[0];
    const sourceNoteIndex = sourceLane.notes.indexOf(sourceId);
    const targetNoteIndex = targetLane.notes.indexOf(targetId);

    if(sourceLane === targetLane) {
      // Move at once to avoid complications
      sourceLane.notes = update(sourceLane.notes, {
        $splice: [
          [sourceNoteIndex, 1],
          [targetNoteIndex, 0, sourceId]
        ]
      });
    }
    else {
      // Get rid of the source
      sourceLane.notes.splice(sourceNoteIndex,  1);

      // Move to the target
      targetLane.notes.splice(targetNoteIndex, 0, sourceId);
    }

    this.setState({lanes});
  }

}
export default alt.createStore(LaneStore, 'LaneStore');
