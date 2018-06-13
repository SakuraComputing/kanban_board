import React from 'react';
import AltContainer from 'alt-container';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';

import '../../styles/styles.scss';

export class App extends React.Component {

  addLane() {
    LaneActions.create({name: 'New Lane'});
  }

  render() {

    return (
      <div>
        <button className="add-lane" onClick={this.addLane}>Add a new note</button>

        <AltContainer
          stores={[LaneStore]}
          inject={{
            lanes: () => LaneStore.getState().lanes || []
          }}
        >
          <Lanes/>
        </AltContainer>
      </div>
    );
  }

}
export default App;

