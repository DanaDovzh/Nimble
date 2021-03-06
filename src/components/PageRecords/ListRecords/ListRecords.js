import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Record from './Record';

const ListRecords = () => {
    const dispatch = useDispatch();
    const trackers = useSelector((state) => state.reducerTrackers.trackers);

    console.log(trackers);
    return (
        <ul>
            {trackers.reverse().map((i) => (
                <Record name={i.name} />
            ))}
        </ul>
    );
};
export default ListRecords;
