import uuidv4 from 'uuid/v4';
import alt from '../libs/alt';
import LaneActions from '../actions/LaneActions';

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
}
export default alt.createStore(LaneStore, 'LaneStore');
