import React from 'react';
import AltContainer from 'alt-container';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
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
        <button className="add-lane" onClick={this.addLane}>+</button>

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
export default DragDropContext(HTML5Backend)(App);

