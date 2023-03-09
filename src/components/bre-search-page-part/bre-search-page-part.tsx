import styles from './bre-search-page-part.module.scss';
import classNames from 'classnames';

export interface Bre_Search_Page_PartProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-bre-search-page-parts-and-templates
 */
export const Bre_Search_Page_Part = ({ className }: Bre_Search_Page_PartProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-breSearchPagePart-style']}>
                <div className={styles['div1-breSearchPage-style']}>
                    <h1>Common Name</h1>
                    <ul>
                        <li>Test</li>
                    </ul>
                </div>
                <div>
                    <button className={styles['button-breSearchPagePart-style']}>Back</button>
                </div>
            </div>
        </div>
    );
};
