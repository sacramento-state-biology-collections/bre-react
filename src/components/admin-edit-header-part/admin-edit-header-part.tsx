import styles from './admin-edit-header-part.module.scss';
import classNames from 'classnames';

export interface Admin_Edit_Header_PartProps {
    className?: string;
    toggle_AdminEditView: () => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-edit-body-1-parts-and-templates
 */
export const Admin_Edit_Header_Part = ({
    className,
    toggle_AdminEditView,
}: Admin_Edit_Header_PartProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-AdminEditBodyPart-style']}>
                <div className={styles['div1-AdminEditBodyPart-style']}>EDIT PAGE</div>
                <div className={styles['div2-AdminEditBodyPart-style']}>
                    <img />
                    <button
                        className={styles['btn-AdminEditBodyPart-style']}
                        onClick={toggle_AdminEditView}
                    >
                        Back
                    </button>
                    <input className={styles['input-AdminEditBodyPart-Style']} />
                    <button className={styles['btn-AdminEditBodyPart-style']}>Search</button>
                    <img />
                </div>
            </div>
        </div>
    );
};
