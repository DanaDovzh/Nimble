import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';

import { addTracker } from '../../../redux/action/action';
const AddRecord = () => {
    const dispatch = useDispatch();
    const [nameTracker, setNameTracker] = useState('');
    const handlerAddTracker = () => {
        const newTracker = {
            name: nameTracker ? nameTracker : moment().format('YYYY-MM-DD'),
        };
        dispatch(addTracker(newTracker));
        setNameTracker('');
    };

    return (
        <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="add-tracker">Add tracker</InputLabel>
            <OutlinedInput
                id="add-tracker"
                type="text"
                placeholder="Enter tracker name"
                onChange={(e) => setNameTracker(e.target.value)}
                value={nameTracker}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={handlerAddTracker}>
                            <PlayCircleFilledRoundedIcon
                                fontSize="large"
                                className="btn--add"
                            />
                        </IconButton>
                    </InputAdornment>
                }
                labelWidth={85}
            />
        </FormControl>
    );
};

export default AddRecord;
