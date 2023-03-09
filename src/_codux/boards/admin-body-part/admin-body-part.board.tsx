import { createBoard } from '@wixc3/react-board';
import { Admin_Body_Part } from '../../../components/admin-body-part/admin-body-part';

export default createBoard({
    name: 'Admin_Body_Part',
    Board: () => <Admin_Body_Part />
});
