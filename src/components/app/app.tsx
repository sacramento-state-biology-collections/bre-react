import styles from './app.module.scss';
import classNames from 'classnames';
import { WelcomePage } from '../welcome-page/welcome-page';
import { LoginRibbon } from '../login-ribbon/login-ribbon';

export interface AppProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-apps-and-templates
 */
export const App = ({ className, children = 'App' }: AppProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <LoginRibbon />
            <WelcomePage />
        </div>
    );
};
