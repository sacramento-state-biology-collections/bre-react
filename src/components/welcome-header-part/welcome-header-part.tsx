import styles from './welcome-header-part.module.scss';
import classNames from 'classnames';

export interface Welcome_Header_PartProps {
    className?: string;
    toggle_AdminLoginView: () => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-welcome-header-parts-and-templates
 */
export const Welcome_Header_Part = ({ className, toggle_AdminLoginView }: Welcome_Header_PartProps) => {
    return (
        <div className={classNames(className, styles.root)}>
            <div className={styles['div-welcomeHeaderPart-style']}>
                <h1 className={styles['h1-welcomeHeaderPart-style']}>
                    Biology Research Engine (BRE)
                </h1>
                <button className={styles['button-welcomeHeaderPart-style']} onClick={toggle_AdminLoginView}>Login</button>
            </div>
        </div>
    );
};
