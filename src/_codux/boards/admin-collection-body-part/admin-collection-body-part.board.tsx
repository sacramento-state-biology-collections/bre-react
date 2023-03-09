import { createBoard } from '@wixc3/react-board';
import { Admin_Collection_Body_Part } from '../../../components/admin-collection-body-part/admin-collection-body-part';

export default createBoard({
    name: 'Admin_Collection_Body_Part',
    Board: () => <Admin_Collection_Body_Part />
});
