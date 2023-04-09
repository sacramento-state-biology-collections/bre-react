import styles from './status-light-part.module.scss';
import classNames from 'classnames';

export interface Status_Light_PartProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-status-light-parts-and-templates
 */
export const Status_Light_Part = ({ className }: Status_Light_PartProps) => {
    const isOnline: boolean = true;
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div-StatusLightPart-style']}>
                Server Status<span className={ isOnline
                            ? `${styles['span-StatusLightPart-style']} ${styles.online}`
                            : `${styles['span-StatusLightPart-style2']} ${styles.offline}`}></span>
            </div>
        </div>
    );
};
