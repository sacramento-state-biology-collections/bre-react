import { createBoard } from '@wixc3/react-board';
import { Welcome_Body_Part } from '../../../components/welcome-body-part/welcome-body-part';

export default createBoard({
    name: 'Welcome_Body_Part',
    Board: () => <Welcome_Body_Part />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
