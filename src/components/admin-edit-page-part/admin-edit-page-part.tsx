import styles from './admin-edit-page-part.module.scss';
import ip_addresses from '../../ip_addresses.json';
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
    const ipAddress = ip_addresses.ip;

    function get_Data() {
        return object_AdminEditPageData.map((item: any, index: number) => {
            return Object.entries(item).map(([key, value]) => {
                if (key === 'collection' || key === 'catalog1' || key === 'image') {
                    return null;
                } else {
                    return (
                        <div className={styles['div4-AdminEditPagePart-style']}>
                            <strong>
                                <label>{key}: </label>
                            </strong>
                            <input
                                name={key}
                                title={object_AdminEditPageData[1]['collection']}
                                type="text"
                                defaultValue={String(value)}
                            />
                        </div>
                    );
                }
            });
        });
    }

    function post_Changes() {
        let collection = object_AdminEditPageData[1]['collection'];
        let catalog = object_AdminEditPageData[1]['catalog1'];
        let inputs = document.querySelectorAll(`input[title="${collection}"]`);
        inputs.forEach((input) => {
            let column = input.getAttribute('name');
            let data = input.getAttribute('value');
            fetch(
                `http://${ipAddress}:9001/api/entry/${collection}_Collection/${catalog}/${column}/${data}`,
                {
                    method: 'POST',
                }
            );
        });
        // select tag with title elementUpload
        let input = document.querySelector(`input[title="elementUpload"]`) as HTMLInputElement;
        // if input has a file, then upload it
        if (input.files !== null) {
            let file = input.files[0];
            let formData = new FormData();
            formData.append('file', file);
            fetch(
                `http://${ipAddress}:9001/api/entry/${collection}_Collection/${catalog}/image/${file.name}`,
                {
                    method: 'POST',
                    body: formData,
                }
            );
        }
    }

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div-AdminEditPagePart-style']}>
                <div className={styles['div2-AdminEditPagePart-style']}>
                    <div>
                        <div className={styles['div3-AdminEditPagePart-style']}>
                            {get_Data()}
                            <input
                                title="elementUpload"
                                type="file"
                                accept=".jpg"
                                className={styles['input-AdminEditPagePart-style']}
                            />
                        </div>
                        <button
                            title="button1"
                            className={styles['button1-AdminEditPagePart-style']}
                            onClick={() => post_Changes()}
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
