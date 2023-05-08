import { createBoard } from '@wixc3/react-board';
import { Admin_History_Body_Part } from '../../../components/admin-history-body-part/admin-history-body-part';

export default createBoard({
    name: 'Admin_History_Body_Part',
    Board: () => <Admin_History_Body_Part str_History={''} arr_History={[]} />,
});
