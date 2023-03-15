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
                        The BRE Search Engine is a tool that allows users to easily search and
                        access the vast collection of tables and databases held by the Biology
                        department at Sacramento State. With this tool, students, professors, and
                        kids alike can quickly find the information they need, whether it's for
                        research, studying, or personal interest. So go ahead and dive in – you
                        never know what awaits you!
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
                        src="https://raw.githubusercontent.com/sacramento-state-biology-collections/bre-flask-server/main/images/icons/manifest-icon-512.maskable.png"
                        className={styles['img-welcomeBodyPart-style']}
                    />
                </div>
            </div>
        </div>
    );
};
