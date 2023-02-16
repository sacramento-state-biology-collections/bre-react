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
                    <div hidden={animalBool}>
                        <button className="sub-button1" onClick={toggleAnimalBool}>Birds</button>
                    </div>
                    <div hidden={animalBool}>
                        <button className="sub-button1" onClick={toggleAnimalBool}>Fish</button>
                    </div>
                    <div hidden={animalBool}>
                        <button className="sub-button1" onClick={toggleAnimalBool}>Invertebrates</button>
                    </div>
                    <div hidden={animalBool}>
                        <button className="sub-button1" onClick={toggleAnimalBool}>Mammals</button>
                    </div>
                    <div hidden={animalBool}>
                        <button className="sub-button1" onClick={toggleAnimalBool}>Plants</button>
                    </div>
                    <div hidden={animalBool}>
                        <button className="sub-button1" onClick={toggleAnimalBool}>Reptiles</button>
                    </div>
                </button>
                <button className="button-style" onClick={toggleBirdBool}>
                    Birds
                    <div hidden={birdBool}>
                        <button className="sub-button1" onClick={toggleBirdBool}>Birds</button>
                    </div>
                </button>
                <button className="button-style" onClick={togglefishBool}>
                    Fish
                    <div hidden={fishBool}>
                        <button className="sub-button1" onClick={togglefishBool}>Fish</button>
                    </div>
                </button>
                <button className="button-style" onClick={toggleInvertBool}>
                    Invertebrates
                    <div hidden={invertBool}>
                        <button className="sub-button1" onClick={toggleInvertBool}>Invertebrates</button>
                    </div>
                </button>
                <button className="button-style" onClick={toggleMammalBool}>
                    Mammals
                    <div hidden={mammalBool}>
                        <button className="sub-button1" onClick={toggleMammalBool}>Mammals</button>
                    </div>
                </button>
                <button className="button-style" onClick={togglePlantBool}>
                    Plants
                    <div hidden={plantBool}>
                        <button className="sub-button1" onClick={togglePlantBool}>Plants</button>
                    </div>
                </button>
                <button className="button-style" onClick={toggleReptileBool}>
                    Reptiles
                    <div hidden={reptileBool}>
                        <button className="sub-button1" onClick={toggleReptileBool}>Reptiles</button>
                    </div>
                </button>
            </div>
        </div>
    );

    // return <div className={classNames(styles.root, className)}>{children}</div>;
};
