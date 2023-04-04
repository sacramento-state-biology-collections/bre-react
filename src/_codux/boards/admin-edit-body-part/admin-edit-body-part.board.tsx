import { createBoard } from '@wixc3/react-board';
import { Admin_Edit_Body_Part } from '../../../components/admin-edit-body-part/admin-edit-body-part';

export default createBoard({
    name: 'Admin_Edit_Body_Part',
    Board: () => <Admin_Edit_Body_Part />,
    environmentProps: {
        canvasHeight: 710,
    },
});
