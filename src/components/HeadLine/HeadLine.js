import React from 'react';
import Typography from '@material-ui/core/Typography';

import './head-line.sass';

const HeadLine = ({ title }) => {
    return (
        <Typography variant="h3" align="center" className="headline">
            {title}
        </Typography>
    );
};

export default HeadLine;
