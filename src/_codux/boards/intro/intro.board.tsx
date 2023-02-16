import { createBoard } from '@wixc3/react-board';
import { Intro } from '../../../components/intro/intro';
import Classnames from 'classnames';

export default createBoard({
    name: 'Intro',
    Board: () => (
        <Intro className="mid">
            <h2 className="mid">Select Collection Below for Quick Search Options</h2>
            <br />
            <div className="intro-components">
                <button className="button-style">
                    Animal
                    <button className="sub-button1">Birds</button>
                    <button className="sub-button1">Fish</button>
                    <button className="sub-button1">Invertebrates</button>
                    <button className="sub-button1">Mammals</button>
                    <button className="sub-button1">Plants</button>
                    <button className="sub-button1">Reptiles</button>
                </button>
                <button className={Classnames('button-style', 'bre-button')}>
                    Birds
                    <button className="sub-button1">Birds</button>
                </button>
                <button className="button-style">
                    Fish<button className="sub-button1">Fish</button>
                </button>
                <button className="button-style">
                    Invertebrates<button className="sub-button1">Invertebrates</button>
                </button>
                <button className="button-style">
                    Mammals<button className="sub-button1">Mammals</button>
                </button>
                <button className="button-style">
                    Plants<button className="sub-button1">Plants</button>
                </button>
                <button className="button-style">
                    Reptiles<button className="sub-button1">Reptiles</button>
                </button>
            </div>
        </Intro>
    ),
    environmentProps: {
        canvasWidth: 1020,
        canvasHeight: 382,
        windowWidth: 1024,
        windowHeight: 768,
    },
});
