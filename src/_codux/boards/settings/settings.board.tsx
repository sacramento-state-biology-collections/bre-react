import { createBoard } from '@wixc3/react-board';
import { Settings } from '../../../components/settings/settings';
import Classnames from 'classnames';

export default createBoard({
    name: 'Settings',
    Board: () => (
        <Settings>
            <div className="header-style">
                <h1 className="text-style">ADMIN</h1>
                <button className={Classnames('button-head', 'button-color')}>
                    Settings
                    <select>
                        <option>Option A</option>
                        <option>Option B</option>
                        <option>Option C</option>
                    </select>
                </button>
            </div>
        </Settings>
    ),
    environmentProps: {
        canvasHeight: 643,
        canvasWidth: 1129,
        windowWidth: 1102,
    },
});
