import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Status_Light_Part } from '../../../components/status-light-part/status-light-part';

export default createBoard({
    name: 'Status_Light_Part',
    Board: () => <Status_Light_Part />,
    environmentProps: {
        canvasHeight: 19,
    },
});
