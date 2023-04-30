import styles from './admin-edit-page-part.module.scss';
import classNames from 'classnames';

export interface Admin_Edit_Page_PartProps {
    className?: string;
    toggle_AdminEditPage: (catalog: string) => void;
    object_AdminEditPageData: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-edit-page-parts-and-templates
 */
export const Admin_Edit_Page_Part = ({
    className,
    toggle_AdminEditPage,
    object_AdminEditPageData,
}: Admin_Edit_Page_PartProps) => {
    function get_Data() {
        return object_AdminEditPageData.map((item: any, index: number) => {
            return Object.entries(item).map(([key, value]) => {
                return (
                    <div>
                        <label>{key}: </label>
                        <input title={key} type="text" value={String(value)} />
                    </div>
                );
            });
        });
    }

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div-AdminEditPagePart-style']}>
                <div className={styles['div2-AdminEditPagePart-style']}>
                    <div>
                        {get_Data()}
                        <button
                            title="button1"
                            className={styles['button1-AdminEditPagePart-style']}
                        >
                            Submit
                        </button>
                    </div>
                    <div>
                        <button
                            title="button2"
                            className={styles['button2-AdminEditPagePart-style']}
                            onClick={() => toggle_AdminEditPage('')}
                        >
                            X
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
