import { createBoard } from '@wixc3/react-board';
import { TableDataView } from '../../../components/table-data-view/table-data-view';
import TableDataView_module from '../../../components/table-data-view/table-data-view.module.scss';

export default createBoard({
    name: 'TableDataComponent',
    Board: () => <TableDataView className={TableDataView_module.root}></TableDataView>,
});
