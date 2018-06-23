import React from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

const noteSource = {
  beginDrag(props) {
    return{
      id: props.id
    };
  },
  isDragging(props, monitor) {
    return props.id === monitor.getItem().id;
  }
};

const noteTarget = {
  hover(targetProps, monitor) {
    const targetId = targetProps.id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;

    if(sourceId !== targetId) {
      targetProps.onMove({sourceId, targetId});
    }
  }
};

@DragSource(ItemTypes.NOTE, noteSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
@DropTarget(ItemTypes.NOTE,noteTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))
class Note extends React.Component {
  render() {
    const { connectDragSource, connectDropTarget, isDragging, onMove, id, editing, ...props} = this.props;
    const dragSource = editing ? a => a : connectDragSource;

    return dragSource(connectDragSource(connectDropTarget(
      <li style={{ opacity: isDragging ? 0 : 1}}
        {...props}>{props.children}</li>
    )));
  }
};

Note.defaultProps = {
  connectDropTarget: PropTypes.func,
  connectDragSource: PropTypes.func,
  isDragging: PropTypes.func,
  onMove: PropTypes.func,
  id: PropTypes.string,
  editing: PropTypes.bool,
  props: PropTypes.array
}

export default Note;