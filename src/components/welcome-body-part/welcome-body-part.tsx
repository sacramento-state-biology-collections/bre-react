import styles from './welcome-body-part.module.scss';
import classNames from 'classnames';

export interface Welcome_Body_PartProps {
    className?: string;
    toggle_TableEngineView: () => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-welcome-body-parts-and-templates
 */
export const Welcome_Body_Part = ({
    className,
    toggle_TableEngineView,
}: Welcome_Body_PartProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-welcomeBodyPart-style']}>
                <div className={styles['div1-welcomeBodyPart-style']}>
                    <h1 className={styles['h1-welcomeBodyPart-style']}>Welcome</h1>
                    <p className={styles['p-welcomeBodyPart-style']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button
                        className={styles['button-welcomeBodyPart-style']}
                        onClick={toggle_TableEngineView}
                    >
                        BRE Search Engine
                    </button>
                </div>
                <div className={styles['div2-welcomeBodyPart-styles']}>
                    <img
                        alt="placeholder"
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        className={styles['img-welcomeBodyPart-style']}
                    />
                </div>
            </div>
        </div>
    );
};
