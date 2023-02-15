import { createBoard } from '@wixc3/react-board';
import { AdminPageHeader } from '../../../components/admin-page-header/admin-page-header';

export default createBoard({
    name: 'AdminPageHeader',
    Board: () => <AdminPageHeader />
});
