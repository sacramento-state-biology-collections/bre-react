import styles from './admin-edit-body-1-part.module.scss';
import classNames from 'classnames';

export interface Admin_Edit_Body_PartProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-edit-body-1-parts-and-templates
 */
export const Admin_Edit_Body_Part = ({ className }: Admin_Edit_Body_PartProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-AdminEditBodyPart-style']}>
                <div className={styles['div1-AdminBodyPart-style']}>EDIT PAGE</div>
                <div className={styles['div2-AdminEditBodyPart-style']}>
                    <img />
                    <input className={styles['input-AdminEditBodyPart-Style']} />
                    <button className={styles['btn-AdminEditBodyPart-style']}>Search</button>
                    <img />
                </div>
            </div>
        </div>
    );
};
