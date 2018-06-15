import React from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

const noteSource = {
  beginDrag(props) {
    console.log('begin dragging note', props);

    return{};
  }
};

@DragSource(ItemTypes.NOTE, noteSource, (connect) => ({
  connectDragSource: connect.dragSource()
}))
export default class Note extends React.Component {
  render() {
    const { connectDragSource, id, onMove, ...props} = this.props;

    console.log(this.props);

    return <div>wibble</div>
    console.log(props.children);
    return connectDragSource(
      <li {...props}>{props.children}</li>
    );
  }
};

