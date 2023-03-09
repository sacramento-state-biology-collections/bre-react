import { createBoard } from '@wixc3/react-board';
import { Admin_Header_Part } from '../../../components/admin-header-part/admin-header-part';

export default createBoard({
    name: 'Admin_Header_Part',
    Board: () => <Admin_Header_Part />
});
