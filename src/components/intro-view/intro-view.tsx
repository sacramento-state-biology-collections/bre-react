import styles from './intro-view.module.scss';
import classNames from 'classnames';
import { Intro } from '../intro/intro';
import { Header } from '../header/header';

export interface IntroViewProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-intro-views-and-templates
 */
export const IntroView =  ({
    className,
    children = 'IntroView',
}: IntroViewProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Header></Header>
            <Intro toggleAnimalBool={()=>{}} toggleBirdBool={()=>{}} togglefishBool={()=>{}} toggleInvertBool={()=>{}} toggleMammalBool={()=>{}} togglePlantBool={()=>{}} toggleReptileBool={()=>{}}/>
        </div>
    );
};
