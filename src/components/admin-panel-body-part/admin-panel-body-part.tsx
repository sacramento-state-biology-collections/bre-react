import styles from './admin-panel-body-part.module.scss';
import classNames from 'classnames';

export interface Admin_Panel_Body_PartProps {
    className?: string;
    toggle_LoadingTrue: () => void;
    toggle_LoadingFalse: () => void;
    toggle_AdminEditView: () => void;
    update_AdminEditData: (AdminEditData: any) => void;
    ipAddress: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-panel-body-parts-and-templates
 */
export const Admin_Panel_Body_Part = ({
    className,
    toggle_LoadingTrue,
    toggle_LoadingFalse,
    toggle_AdminEditView,
    update_AdminEditData,
    ipAddress,
}: Admin_Panel_Body_PartProps) => {
    function upload_File(collection: String) {
        let element: HTMLElement = document.querySelector(
            `input[title="${collection}Upload"]`
        ) as HTMLElement;
        element.click();
        element.onchange = () => {
            toggle_LoadingFalse();
            // @ts-ignore: Object is possibly 'null'.
            let file = (element as HTMLInputElement).files[0];
            let formData = new FormData();
            formData.append('file', file);
            fetch(`http://${ipAddress}:9001/api/postxlsx/${collection}`, {
                method: 'POST',
                body: formData,
            })
                .then((response) => toggle_LoadingTrue())
                .catch((error) => console.log(error));
        };
        (element as HTMLInputElement).value = '';
    }

    function toggle_EditView(collection: String) {
        toggle_AdminEditView();
        fetch(`http://${ipAddress}:9001/api/edit/${collection}_collection`)
            .then((response) => response.json())
            .then((Data) => {
                Data[0]['collection'] = collection;
                update_AdminEditData(Data);
            });
    }
    function generate_panels() {
        const collections = [
            'Mammals',
            'Insects',
            'Fish',
            'Arboretum',
            'Vivarium',
            'Green House',
            'Herbarium',
            'Herps',
        ];
        var collection = collections.map((item) => item.replace(' ', '_').toLowerCase());
        let list = [];
        for (let i = 0; i < collections.length; i++) {
            list.push(
                <div className={styles['div1-AdminPanelBodyPart-style']}>
                    <div>
                        <h1>{collections[i]}</h1>
                    </div>
                    <div className={styles['div2-AdminPanelBodyPart-style']}>
                        <button
                            className={styles['button-AdminPanelBodyPart-style']}
                            onClick={() => toggle_EditView(collection[i])}
                        >
                            Edit
                        </button>
                        <a
                            href={`http://${ipAddress}:9001/api/getxlsx/`.concat(collection[i])}
                            download={collection[i].concat('.xlsx')}
                        >
                            <button className={styles['button-AdminPanelBodyPart-style']}>
                                Download
                            </button>
                        </a>
                        <button
                            className={styles['button-AdminPanelBodyPart-style']}
                            onClick={() => upload_File(collection[i])}
                        >
                            Upload
                            <form
                                method="post"
                                encType={`http://${ipAddress}:9001/api/postxlsx/`.concat(
                                    collection[i]
                                )}
                            >
                                <input
                                    title={collection[i].concat('Upload')}
                                    type="file"
                                    accept=".xlsx"
                                    hidden={true}
                                />
                            </form>
                        </button>
                    </div>
                </div>
            );
        }
        return list;
    }

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-AdminPanelBodyPart-style']}>{generate_panels()}</div>
        </div>
    );
};
