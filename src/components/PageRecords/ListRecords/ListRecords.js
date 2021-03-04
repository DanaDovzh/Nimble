import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ListRecords = () => {
    const dispatch = useDispatch();
    const trackers = useSelector(
        (state) => state.reducerTrackers.trackers.data
    );
    console.log(trackers);
    return (
        <div>
            {trackers.map((i) => {
                return <p>{i.name}</p>;
            })}
        </div>
    );
};
export default ListRecords;
