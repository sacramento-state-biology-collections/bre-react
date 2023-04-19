import styles from './qr-code-generator-part.module.scss';
import classNames from 'classnames';

export interface Qr_code_generator_partProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-qr-code-generator-parts-and-templates
 */
export const Qr_code_generator_part = ({ className }: Qr_code_generator_partProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <ul className={styles['ul-items']}>
                <li className={styles['li-item']}>
                    <h4 className={styles['h4-item']}>QR Code for Drawer A </h4>
                    <button className={styles['button-item']}>Generate</button>
                </li>
                <li className={styles['li-item']}>
                    <h4 className={styles['h4-item']}>G QR Code for Drawer B </h4>
                    <button className={styles['button-item']}>Generate</button>
                </li>
                <li className={styles['li-item']}>
                    <h4 className={styles['h4-item']}>QR Code for Drawer C </h4>
                    <button className={styles['button-item']}>Generate</button>
                </li>
            </ul>
        </div>
    );
};
