import { createBoard } from '@wixc3/react-board';
import { TableDataView } from '../../../components/table-data-view/table-data-view';

export default createBoard({
    name: 'TableDataView',
    Board: () => (
        <TableDataView
            getData={() => []}
            toggleCardBool={() => {}}
        />
    ),
});
