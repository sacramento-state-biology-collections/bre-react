import { createBoard } from '@wixc3/react-board';
import { AdminCollectionView } from '../../../components/admin-collection-view/admin-collection-view';

export default createBoard({
    name: 'AdminCollectionView',
    Board: () => <AdminCollectionView />
});
