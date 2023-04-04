import { createBoard } from '@wixc3/react-board';
import { AdminEditView } from '../../../components/admin-edit-view/admin-edit-view';

export default createBoard({
    name: 'AdminEditView',
    Board: () => <AdminEditView />,
});
