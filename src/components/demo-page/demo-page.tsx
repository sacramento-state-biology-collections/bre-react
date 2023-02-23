import styles from './demo-page.module.scss';
import classNames from 'classnames';

export interface DemoPageProps {
    className?: string;
    children?: React.ReactNode;
    toggleView: (nextView: number) => void;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-demo-pages-and-templates
 */
export const DemoPage = ({ className = 'DemoPage', toggleView }: DemoPageProps) => {
    function toggleNextView() {
        toggleView(0);
    }
    return (
        <div className={classNames(styles.root, className)}>
            <div className="RootWelcomePage">
                <div className="WelcomePage">
                    <h1 className="WelcomePageH1">DemoPage</h1>
                    <p className="WelcomePageP">This is a demo page.</p>
                    <button className="WelcomePageBtn" onClick={toggleNextView}>
                        Go Back
                    </button>
                </div>
                <div className="WelcomePageImg">
                    <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" />
                </div>
            </div>
        </div>
    );
};
