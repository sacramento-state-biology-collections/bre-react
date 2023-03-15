import styles from './table-loading-img-part.module.scss';
import classNames from 'classnames';

export interface Table_Loading_Img_PartProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-table-loading-img-parts-and-templates
 */
export const Table_Loading_Img_Part = ({ className }: Table_Loading_Img_PartProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div-TableLoadingImgPart-style']}>
                <img
                    src="https://cdn4.iconfinder.com/data/icons/cheese-lovers/512/Cheese_final_Camambert-512.png"
                    alt="cheese"
                    className={styles['img-TableLoadingImgPart-style']}
                />
            </div>
        </div>
    );
};
