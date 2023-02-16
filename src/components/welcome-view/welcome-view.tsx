import styles from './welcome-view.module.scss';
import classNames from 'classnames';
import { LoginRibbon } from '../login-ribbon/login-ribbon';
import { WelcomePage } from '../welcome-page/welcome-page';

export interface WelcomeViewProps {
    className?: string;
    children?: React.ReactNode;
    toggleBool: () => void;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-welcome-views-and-templates
 */
export const WelcomeView = ({ className, children = 'WelcomeView', toggleBool }: WelcomeViewProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <LoginRibbon></LoginRibbon>
            <WelcomePage toggleBool={toggleBool}/>
        </div>
    );
};
