import { createBoard } from '@wixc3/react-board';
import { Settings } from '../../../components/settings/settings';

export default createBoard({
    name: 'Settings',
    Board: () => <Settings></Settings>,
    environmentProps: {
        canvasHeight: 643,
        canvasWidth: 1129,
        windowWidth: 1102,
    },
});
