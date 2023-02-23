import { createBoard } from '@wixc3/react-board';
import { WelcomeView } from '../../../components/welcome-view/welcome-view';

export default createBoard({
    name: 'WelcomeView',
    Board: () => <WelcomeView toggleView={() => {}} />,
});
