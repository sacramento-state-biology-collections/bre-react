import styles from './admin-body-part.module.scss';
import classNames from 'classnames';

export interface Admin_Body_PartProps {
    className?: string;
    toggle_AdminPanelView: () => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-body-parts-and-templates
 */
export const Admin_Body_Part = ({ className, toggle_AdminPanelView }: Admin_Body_PartProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div-AdminBodyPart-style']}>
                <p>Login Screen will be made here for Sprint 8.</p>
                <button onClick={toggle_AdminPanelView}>Move to Admin Panel View</button>
            </div>
        </div>
    );
};
