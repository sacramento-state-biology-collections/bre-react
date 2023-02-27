import { createBoard } from '@wixc3/react-board';
import { DemoView } from '../../../components/demo-view/demo-view';

export default createBoard({
    name: 'DemoView',
    Board: () => <DemoView toggleView={() => {}} />,
});
