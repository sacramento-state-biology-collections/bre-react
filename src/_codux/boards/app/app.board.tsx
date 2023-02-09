import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'Header',
    Board: () => <App></App>,
    environmentProps: {
        windowWidth: 862,
    },
});
