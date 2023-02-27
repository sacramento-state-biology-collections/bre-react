import { useState } from 'react';
import styles from './bre-home-view.module.scss';
import classNames from 'classnames';
import { Intro } from '../intro/intro';
import { Header } from '../header/header';

export interface BREHomeViewProps {
    className?: string;
    children?: React.ReactNode;
    toggleView: (nextView: number) => void;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-bre-home-views-and-templates
 */
export const BREHomeView = ({ className, children = 'BREHomeView', toggleView }: BREHomeViewProps) => {
    const [animalBool, setmyBoolanimal] = useState(true); 
    const [birdBool, setmyBoolbird] = useState(true); 
    const [fishBool, setmyBoolfish] = useState(true); 
    const [invertBool, setmyBoolinvert] = useState(true); 
    const [mammalBool, setmyBoolmammal] = useState(true); 
    const [plantBool, setmyBoolplant] = useState(true); 
    const [reptileBool, setmyBoolreptile] = useState(true);
    
    function toggleAnimalBool() {
        setmyBoolanimal(!animalBool);
    }
    
    function toggleBirdBool() {
        setmyBoolbird(!birdBool);
    }
    
    function togglefishBool() {
        setmyBoolfish(!fishBool);
    }
    
    function toggleInvertBool() {
        setmyBoolinvert(!invertBool);
    }
    
    function toggleMammalBool() {
        setmyBoolmammal(!mammalBool);
    }
    
    function togglePlantBool() {
        setmyBoolplant(!plantBool);
    }

    function toggleReptileBool() {
        setmyBoolreptile(!reptileBool);
    }
    
    return (
        <div className={classNames(styles.root, className)}>
            <Header toggleView={toggleView}/>
            <Intro toggleAnimalBool={toggleAnimalBool} toggleBirdBool={toggleBirdBool} togglefishBool={togglefishBool} toggleInvertBool={toggleInvertBool} toggleMammalBool={toggleMammalBool} togglePlantBool={togglePlantBool} toggleReptileBool={toggleReptileBool} animalBool={animalBool} birdBool={birdBool} fishBool={fishBool} invertBool={invertBool} mammalBool={mammalBool} plantBool={plantBool} reptileBool={reptileBool}/>
        </div>
    );
};
