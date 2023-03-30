import styles from './admin-history-header-part.module.scss';
import classNames from 'classnames';

export interface Admin_History_Header_PartProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-history-header-parts-and-templates
 */
export const Admin_History_Header_Part = ({ className }: Admin_History_Header_PartProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-AdminHistoryHeaderPart-style']}>
                <span className={styles['span-AdminHistoryHeaderPart-style']}>
                    <h1 className={styles['h1-AdminHistoryHeaderPart-style']}>History Page</h1>
                    <span className={styles['span-AdminHistoryHeaderPart-style']}>
                        <button className={styles['button-AdminHistoryHeaderPart-style']}>
                            Back
                        </button>
                        <select className={styles['select-AdminHistoryHeaderPart-style']}>
                            <option>Apple</option>
                            <option>Banana</option>
                            <option>Watermelon</option>
                        </select>
                        <span className={styles['span1-AdminHistoryHeaderPart-style']}>
                            LASTNAME, FIRSTNAME
                        </span>
                    </span>
                </span>
            </div>
            <div className={styles['div1-AdminHistoryHeaderPart-style']} />
        </div>
    );
};
