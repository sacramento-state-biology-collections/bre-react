import { createBoard } from '@wixc3/react-board';
import { Admin_History_Header_Part } from '../../../components/admin-history-header-part/admin-history-header-part';

export default createBoard({
    name: 'Admin_History_Header_Part',
    Board: () => <Admin_History_Header_Part toggle_AdminHistoryView={() => {}} />,
});
