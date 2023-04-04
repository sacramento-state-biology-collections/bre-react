import { createBoard } from '@wixc3/react-board';
import { Admin_Edit_Header_Part } from '../../../components/admin-edit-header-part/admin-edit-header-part';

export default createBoard({
    name: 'Admin_Edit_Header_Part',
    Board: () => <Admin_Edit_Header_Part toggle_AdminEditView={() => {}} />,
    environmentProps: {
        canvasHeight: 710,
    },
});
