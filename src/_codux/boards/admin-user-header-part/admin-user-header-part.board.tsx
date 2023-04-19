import { createBoard } from '@wixc3/react-board';
import { Admin_User_Header_Part } from '../../../components/admin-user-header-part/admin-user-header-part';

export default createBoard({
    name: 'Admin_User_Header_Part',
    Board: () => (
        <Admin_User_Header_Part toggle_WelcomeView={() => {}} toggle_AdminHistoryView={() => {}} refresh_View={() => {}} />
    ),
});
