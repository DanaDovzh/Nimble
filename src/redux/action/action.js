import { actionTypes } from '../reducer/reducerTrackers';

export const addTracker = (newTracker) => ({
    type: actionTypes.addTracker,
    payload: { newTracker },
});
