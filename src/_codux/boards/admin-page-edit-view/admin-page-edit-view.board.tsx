import { createBoard } from '@wixc3/react-board';
import { Admin_Edit_View } from '../../../components/admin-edit-view/admin-edit-view';

export default createBoard({
    name: 'Admin_Edit_View',
    Board: () => <Admin_Edit_View />,
});
