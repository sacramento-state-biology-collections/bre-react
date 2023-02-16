import { createBoard } from '@wixc3/react-board';
import { Intro } from '../../../components/intro/intro';

export default createBoard({
    name: 'Intro',
    Board: () => (
        <Intro className="mid">
            <h2 className="mid">Select Collection Below for Quick Search Options</h2>
            <br />
            <div className="intro-components">
                <button className="button-style">Animal</button>
                <button className="button-style">Birds</button>
                <button className="button-style">Fish</button>
                <button className="button-style">Invertebrates</button>
                <button className="button-style">Mammals</button>
                <button className="button-style">Plants</button>
                <button className="button-style">Reptiles</button>
            </div>
        </Intro>
    ),
    environmentProps: {
        canvasWidth: 1020,
        canvasHeight: 382,
    },
});
