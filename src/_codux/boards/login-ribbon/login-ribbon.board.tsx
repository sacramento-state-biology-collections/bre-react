import { createBoard } from '@wixc3/react-board';
import { LoginRibbon } from '../../../components/login-ribbon/login-ribbon';

export default createBoard({
    name: 'LoginRibbon',
    Board: () => <LoginRibbon />
});
