import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Qr_code_generator_part } from '../../../components/qr-code-generator-part/qr-code-generator-part';

export default createBoard({
    name: 'Qr_code_generator_part',
    Board: () => <Qr_code_generator_part />,
    environmentProps: {
        canvasWidth: 1292,
        canvasHeight: 832,
        windowWidth: 1202,
        windowHeight: 825,
    },
});
