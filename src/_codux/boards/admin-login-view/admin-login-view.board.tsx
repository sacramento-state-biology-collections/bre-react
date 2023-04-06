import { createBoard } from '@wixc3/react-board';
import { AdminLoginView } from '../../../components/admin-login-view/admin-login-view';

export default createBoard({
    name: 'AdminLoginView',
    Board: () => (
        <AdminLoginView
            toggle_AdminPanelView={() => {}}
            update_LoginData={({}) => Promise.resolve()}
            get_LoginData={() => {}}
        />
    ),
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
