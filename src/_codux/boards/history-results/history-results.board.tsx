import { createBoard } from '@wixc3/react-board';
import { HistoryResults } from '../../../components/history-results/history-results';

export default createBoard({
    name: 'HistoryResults',
    Board: () => <HistoryResults />
});
