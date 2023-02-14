import { createBoard } from '@wixc3/react-board';
import { App } from '../../../components/app/app';

export default createBoard({
    name: 'App',
    Board: () => <App />
});
