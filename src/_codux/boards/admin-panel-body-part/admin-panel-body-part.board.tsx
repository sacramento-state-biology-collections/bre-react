import { createBoard } from '@wixc3/react-board';
import { Admin_Panel_Body_Part } from '../../../components/admin-panel-body-part/admin-panel-body-part';

export default createBoard({
    name: 'Admin_Panel_Body_Part',
    Board: () => (
        <Admin_Panel_Body_Part toggle_LoadingTrue={() => {}} toggle_LoadingFalse={() => {}} />
    ),
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
