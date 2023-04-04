import { createBoard } from '@wixc3/react-board';
import { Admin_Page_Edit_View } from '../../../components/admin-page-edit-view/admin-page-edit-view';

export default createBoard({
    name: 'Admin_Page_Edit_View',
    Board: () => <Admin_Page_Edit_View />
});
