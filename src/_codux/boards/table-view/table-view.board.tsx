import { createBoard } from '@wixc3/react-board';
import { TableView } from '../../../components/table-view/table-view';

export default createBoard({
    name: 'TableView',
    Board: () => <TableView toggleView={() => {}} />,
});
