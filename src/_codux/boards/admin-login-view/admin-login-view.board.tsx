import { createBoard } from '@wixc3/react-board';
import { AdminLoginView } from '../../../components/admin-login-view/admin-login-view';

export default createBoard({
    name: 'AdminLoginView',
    Board: () => <AdminLoginView toggle_AdminPanelView={() => {}} />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
