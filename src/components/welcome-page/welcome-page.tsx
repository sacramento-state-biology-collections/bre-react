import styles from './welcome-page.module.scss';
import classNames from 'classnames';

export interface WelcomePageProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-welcome-pages-and-templates
 */
export const WelcomePage = ({ className, children = 'WelcomePage' }: WelcomePageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className="RootWelcomePage">
                <div className="WelcomePage">
                    <h1 className="WelcomePageH1">Welcome</h1>
                    <p className="WelcomePageP">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button className="WelcomePageBtn">Button</button>
                </div>
                <div className="WelcomePageImg">
                    <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" />
                </div>
            </div>
        </div>
    );
};
