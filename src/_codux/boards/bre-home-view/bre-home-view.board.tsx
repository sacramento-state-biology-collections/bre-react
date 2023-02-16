import { createBoard } from '@wixc3/react-board';
import { BREHomeView } from '../../../components/bre-home-view/bre-home-view';

export default createBoard({
    name: 'BREHomeView',
    Board: () => <BREHomeView />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
