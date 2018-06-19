import React from 'react';
import LaneActions from '../../app/actions/LaneActions';
import LaneStore from '../../app/stores/LaneStore';
import alt from '../../app/libs/alt';


describe('LaneStore', () => {

  let lane;

  beforeEach(() => {
    alt.flush();
    lane = "newLane";
    LaneActions.create({ lane: lane });
  });

  it('should create lanes', () => {
    const state = LaneStore.getState();
    expect(state.lanes[0].lane).toEqual(lane)
  });
  it('should update lanes', () => {
    const updatedLane = 'newLane2';
    const lane = LaneStore.getState().lanes[0];
    LaneActions.update({...lane, updatedLane: updatedLane });
    const state = LaneStore.getState();
    expect(state.lanes[0].updatedLane).toEqual(updatedLane);
  });
  it('should return the current lane if the id does not exist', () => {
    const updatedLane = 'test 2';
    const laneId = "uidd99";
    const lane = LaneStore.getState().lanes[0];
    LaneActions.update({...lane, id: laneId, updatedLane: updatedLane  });
    const state = LaneStore.getState();
    expect(state.lanes[0].lane).toEqual(lane.lane);
  });
  it('should delete lanes', () => {
    const lane = LaneStore.getState().lanes[0];
    LaneActions.delete(lane.id);
    const state = LaneStore.getState();
    expect(state.lanes.length).toBe(0);
  });
  // it('should get lanes by Id', () => {
  //   const lane = LaneStore.getState().lanes[0];
  //   const lanes = LaneStore.getLanesByIds([lane.id]);
  //   expect(lanes.length).toBe(1);
  //   expect(lanes[0].task).toEqual(task);
  // });
  // it('should return null if no no Ids passed in', () => {
  //   const lanes = LaneStore.getLanesByIds();
  //   expect(lanes.length).toBe(0);
  // });
});
