import styles from './intro.module.scss';
import classNames from 'classnames';

export interface IntroProps {
    className?: string;
    children?: React.ReactNode;
    toggleAnimalBool: () => void;
    toggleBirdBool: () => void;
    togglefishBool: () => void;
    toggleInvertBool: () => void;
    toggleMammalBool: () => void;
    togglePlantBool: () => void;
    toggleReptileBool: () => void;
    animalBool?: boolean;
    birdBool?: boolean;
    fishBool?: boolean;
    invertBool?: boolean;
    mammalBool?: boolean;
    plantBool?: boolean;
    reptileBool?: boolean;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-intros-and-templates
 */
export const Intro = ({ className, children = 'Intro', toggleAnimalBool, toggleBirdBool, togglefishBool, toggleInvertBool, toggleMammalBool, togglePlantBool, toggleReptileBool, animalBool, birdBool, fishBool, invertBool, mammalBool, plantBool, reptileBool }: IntroProps) => {
    return (
        <div className={styles.IntroDiv}>
            <h2 className="mid">Select Collection Below for Quick Search Options</h2>
            <br />
            <div className="intro-components">
                <button className="button-style" onClick={toggleAnimalBool}>
                    Animal
                    <button className="sub-button1" hidden={!animalBool}>Birds</button>
                    <button className="sub-button1" hidden={!animalBool}>Fish</button>
                    <button className="sub-button1" hidden={!animalBool}>Invertebrates</button>
                    <button className="sub-button1" hidden={!animalBool}>Mammals</button>
                    <button className="sub-button1" hidden={!animalBool}>Plants</button>
                    <button className="sub-button1" hidden={!animalBool}>Reptiles</button>
                </button>
                <button className="button-style" onClick={toggleBirdBool}>
                    Birds
                    <button className="sub-button1" hidden={!birdBool}>Birds</button>
                </button>
                <button className="button-style" onClick={togglefishBool}>
                    Fish<button className="sub-button1" hidden={!fishBool}>Fish</button>
                </button>
                <button className="button-style" onClick={toggleInvertBool}>
                    Invertebrates<button className="sub-button1" hidden={!invertBool}>Invertebrates</button>
                </button>
                <button className="button-style" onClick={toggleMammalBool}>
                    Mammals<button className="sub-button1" hidden={!mammalBool}>Mammals</button>
                </button>
                <button className="button-style" onClick={togglePlantBool}>
                    Plants<button className="sub-button1" hidden={!plantBool}>Plants</button>
                </button>
                <button className="button-style" onClick={toggleReptileBool}>
                    Reptiles<button className="sub-button1" hidden={!reptileBool}>Reptiles</button>
                </button>
            </div>
        </div>
    );

    // return <div className={classNames(styles.root, className)}>{children}</div>;
};
