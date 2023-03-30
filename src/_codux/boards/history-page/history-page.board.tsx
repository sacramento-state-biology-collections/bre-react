import { createBoard } from '@wixc3/react-board';
import { HistoryPage } from '../../../components/history-page/history-page';
import { Settings } from '../../../components/settings/settings';
import { HistoryResults } from '../../../components/history-results/history-results';

export default createBoard({
    name: 'HistoryPage',
    Board: () => (
        <HistoryPage>
            <Settings />
            <HistoryResults />
        </HistoryPage>
    ),
});
