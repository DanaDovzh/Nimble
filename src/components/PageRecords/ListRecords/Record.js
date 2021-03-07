import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

import { updateTimeTracker } from '../../../redux/action/action';

import './record.sass';

const Record = ({ name, timeTracker, id }) => {
    const dispatch = useDispatch();
    const [playTracker, setPlayTracker] = useState(true);
    const handlerStart = () => {
        setPlayTracker(!playTracker);
        console.log(moment().format(timeTracker));
        dispatch(updateTimeTracker(id));
    };
    useEffect(() => {
        console.log('HGFDS:LKJHGFDS');
    }, []);

    return (
        <li class="record">
            <p>{name}</p>
            <p className="record__end">
                <p>{timeTracker}</p>
                <IconButton onClick={handlerStart}>
                    {playTracker ? (
                        <PlayCircleOutlineIcon fontSize="default" />
                    ) : (
                        <PauseCircleOutlineIcon fontSize="default" />
                    )}
                </IconButton>
                <IconButton>
                    <DeleteOutlineRoundedIcon
                        fontSize="default"
                        className="btn--delete"
                    />
                </IconButton>
            </p>
        </li>
    );
};

export default Record;
