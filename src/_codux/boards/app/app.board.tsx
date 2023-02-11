import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'Home',
    Board: () => <App></App>,
    environmentProps: {
        windowWidth: 862,
    },
});
