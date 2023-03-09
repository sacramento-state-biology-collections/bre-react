import { createBoard } from '@wixc3/react-board';
import { Welcome_Header_Part } from '../../../components/welcome-header-part/welcome-header-part';

export default createBoard({
    name: 'Welcome_Header_Part',
    Board: () => <Welcome_Header_Part />
});
