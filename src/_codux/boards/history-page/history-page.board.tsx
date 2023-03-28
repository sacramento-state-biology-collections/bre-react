import { createBoard } from '@wixc3/react-board';
import { HistoryPage } from '../../../components/history-page/history-page';

export default createBoard({
    name: 'HistoryPage',
    Board: () => <HistoryPage />
});
