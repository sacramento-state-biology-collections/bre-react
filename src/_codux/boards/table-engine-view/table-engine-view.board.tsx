import { createBoard } from '@wixc3/react-board';
import { TableEngineView } from '../../../components/table-engine-view/table-engine-view';

export default createBoard({
    name: 'TableEngineView',
    Board: () => <TableEngineView />
});
