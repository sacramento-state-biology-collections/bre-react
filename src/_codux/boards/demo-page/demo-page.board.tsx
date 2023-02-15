import { createBoard } from '@wixc3/react-board';
import { DemoPage } from '../../../components/demo-page/demo-page';

export default createBoard({
    name: 'DemoPage',
    Board: () => <DemoPage toggleBool={() => {}} />,
});
