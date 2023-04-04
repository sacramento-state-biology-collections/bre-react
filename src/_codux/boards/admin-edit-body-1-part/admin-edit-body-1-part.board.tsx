import { createBoard } from '@wixc3/react-board';
import { Admin_Edit_Body1_Part } from '../../../components/admin-edit-body-1-part/admin-edit-body-1-part';

export default createBoard({
    name: 'Admin_Edit_Body1_Part',
    Board: () => <Admin_Edit_Body1_Part />,
    environmentProps: {
        canvasHeight: 710,
    },
});
