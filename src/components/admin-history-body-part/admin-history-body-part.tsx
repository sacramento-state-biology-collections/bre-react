import styles from './admin-history-body-part.module.scss';
import classNames from 'classnames';

export interface Admin_History_Body_PartProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-history-body-parts-and-templates
 */
export const Admin_History_Body_Part = ({ className }: Admin_History_Body_PartProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-AdminHistoryBodyPart-style']}>
                <div className={styles['div1-AdminHistoryBodyPart-style']}>Date</div>
                <div className={styles['div2-AdminHistoryBodyPart-style']}>
                    <span className={styles['span-AdminHistoryBodyPart-style']}>
                        <img
                            src={'../styles/Microsoft_Office_Excel_(2019–present).svg.png'}
                            className={styles['img-AdminHistoryBodyPart-style']}
                        />
                        <a href="/" className={styles['a-AdminHistoryBodyPart-style']}>
                            Link
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};
