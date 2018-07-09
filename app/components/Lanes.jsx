import React from 'react';
import Lane from './Lane.jsx';
import PropTypes from 'prop-types';

const Lanes = ({lanes}) => {
  return (
    <div className="lanes">{lanes.map(lane =>
        <Lane className="lane" key={lane.id} lane={lane}>
          <Lane.Header name={lane.name} />
          <Lane.Notes notes={lane.notes} />
        </Lane>
      )}</div>
  );
};
Lanes.propTypes = {
  lanes: PropTypes.array
};
Lanes.defaultProps = {
  lanes: []
};
export default Lanes;





