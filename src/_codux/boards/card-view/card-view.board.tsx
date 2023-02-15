import { createBoard } from '@wixc3/react-board';
import { CardView } from '../../../components/card-view/card-view';

export default createBoard({
    name: 'CardView',
    Board: () => (
        <CardView>
            <div className="card-div">
                <div className="card-content-div">
                    <div className="card-image-div">
                        <img
                            src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                            className="card-img"
                        />
                    </div>
                    <div className="card-info-div">
                        <h1>Heading 1</h1>
                        <ul>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>
                    </div>
                </div>
                <div className="card-buttons-div">
                    <button>Button</button>
                    <button>Button</button>
                </div>
            </div>
        </CardView>
    ),
    environmentProps: {
        windowWidth: 1052,
    },
});
