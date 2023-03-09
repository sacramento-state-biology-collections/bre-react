import styles from './bre-search-card-part.module.scss';
import classNames from 'classnames';

export interface Bre_Search_Card_PartProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-bre-search-card-parts-and-templates
 */
export const Bre_Search_Card_Part = ({ className }: Bre_Search_Card_PartProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-breSearchCardPart-style']}>
                <div className={styles['div1-breSearchCardPart-style']}>
                    <div>
                        <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" />
                    </div>
                    <div>
                        <h1>Common Name</h1>
                        <ul>
                            <li>Test</li>
                        </ul>
                    </div>
                </div>
                <div className={styles['div2-breSearchCardPart-style']}>
                    <button className={styles['button0-breSearchCardPart-style']}>X</button>
                    <button className={styles['button1-breSearchCardPart-style']}>More Info</button>
                </div>
            </div>
        </div>
    );
};
