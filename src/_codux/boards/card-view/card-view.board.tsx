import { createBoard } from '@wixc3/react-board';
import { CardView } from '../../../components/card-view/card-view';

export default createBoard({
    name: 'CardView',
    Board: () => <CardView />,
    environmentProps: {
        windowWidth: 1052,
    },
});