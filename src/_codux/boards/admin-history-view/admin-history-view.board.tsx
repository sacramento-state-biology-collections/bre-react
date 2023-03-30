import { createBoard } from '@wixc3/react-board';
import { AdminHistoryView } from '../../../components/admin-history-view/admin-history-view';

export default createBoard({
    name: 'AdminHistoryView',
    Board: () => <AdminHistoryView />,
    environmentProps: {
        windowHeight: 734,
    },
});
