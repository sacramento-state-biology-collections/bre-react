import { createBoard } from '@wixc3/react-board';
import { AdminPanelView } from '../../../components/admin-panel-view/admin-panel-view';

export default createBoard({
    name: 'AdminPanelView',
    Board: () => (
        <AdminPanelView
            toggle_WelcomeView={() => {}}
            update_AdminEditData={() => {}}
            object_AdminEditData={{}}
            update_AdminEditPageData={() => {}}
            object_AdminEditPageData={{}}
        />
    ),
});
