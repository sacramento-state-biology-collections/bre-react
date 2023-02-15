import { createBoard } from '@wixc3/react-board';
import { WelcomePage } from '../../../components/welcome-page/welcome-page';
import Classnames from 'classnames';

export default createBoard({
    name: 'WelcomePage',
    Board: () => <WelcomePage />,
    environmentProps: {
        canvasWidth: 1536,
    },
});
