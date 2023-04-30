import styles from './admin-panel-body-part.module.scss';
import classNames from 'classnames';

export interface Admin_Panel_Body_PartProps {
    className?: string;
    toggle_LoadingTrue: () => void;
    toggle_LoadingFalse: () => void;
    toggle_AdminEditView: () => void;
    update_AdminEditData: (AdminEditData: any) => void;
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
            // post file to server here http://50.116.3.37:9001/api/postxlsx/fish
            let formData = new FormData();
            formData.append('file', file);
            fetch(`http://50.116.3.37:9001/api/postxlsx/${collection}`, {
                method: 'POST',
                body: formData,
            }).then((response) => toggle_LoadingTrue());
        };
    }

    function toggle_EditView(collection: String) {
        toggle_AdminEditView();
        fetch(`http://50.116.3.37:9001/api/edit/${collection}_collection`)
            .then((response) => response.json())
            .then((Data) => {
                Data[0]['collection'] = collection;
                update_AdminEditData(Data);
            });
    }

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-AdminPanelBodyPart-style']}>
                <div className={styles['div1-AdminPanelBodyPart-style']}>
                    <div>
                        <h1>Mammals</h1>
                    </div>
                    <div className={styles['div2-AdminPanelBodyPart-style']}>
                        <button
                            className={styles['button-AdminPanelBodyPart-style']}
                            onClick={() => toggle_EditView('mammals')}
                        >
                            Edit
                        </button>
                        <a
                            href="http://50.116.3.37:9001/api/getxlsx/mammals"
                            download="mammals.xlsx"
                        >
                            <button className={styles['button-AdminPanelBodyPart-style']}>
                                Download
                            </button>
                        </a>
                        <button
                            className={styles['button-AdminPanelBodyPart-style']}
                            onClick={() => upload_File('mammals')}
                        >
                            Upload
                            <form
                                method="post"
                                encType="http://50.116.3.37:9001/api/postxlsx/mammals"
                            >
                                <input
                                    title="mammalsUpload"
                                    type="file"
                                    accept=".xlsx"
                                    hidden={true}
                                />
                            </form>
                        </button>
                    </div>
                </div>
                <div className={styles['div1-AdminPanelBodyPart-style']}>
                    <div>
                        <h1>Insects</h1>
                    </div>
                    <div className={styles['div2-AdminPanelBodyPart-style']}>
                        <button
                            className={styles['button-AdminPanelBodyPart-style']}
                            onClick={() => toggle_EditView('insects')}
                        >
                            Edit
                        </button>
                        <a
                            href="http://50.116.3.37:9001/api/getxlsx/insects"
                            download="insects.xlsx"
                        >
                            <button className={styles['button-AdminPanelBodyPart-style']}>
                                Download
                            </button>
                        </a>
                        <button
                            className={styles['button-AdminPanelBodyPart-style']}
                            onClick={() => upload_File('insects')}
                        >
                            Upload
                            <input title="insectUpload" type="file" accept=".xlsx" hidden={true} />
                        </button>
                    </div>
                </div>
                <div className={styles['div1-AdminPanelBodyPart-style']}>
                    <div>
                        <h1>Fish</h1>
                    </div>
                    <div className={styles['div2-AdminPanelBodyPart-style']}>
                        <button
                            className={styles['button-AdminPanelBodyPart-style']}
                            onClick={() => toggle_EditView('fish')}
                        >
                            Edit
                        </button>
                        <a href="http://50.116.3.37:9001/api/getxlsx/fish" download="fish.xlsx">
                            <button className={styles['button-AdminPanelBodyPart-style']}>
                                Download
                            </button>
                        </a>
                        <button
                            className={styles['button-AdminPanelBodyPart-style']}
                            onClick={() => upload_File('fish')}
                        >
                            Upload
                            <input title="fishUpload" type="file" accept=".xlsx" hidden={true} />
                        </button>
                    </div>
                </div>
                <div className={styles['div1-AdminPanelBodyPart-style']}>
                    <div>
                        <h1>Arboretum</h1>
                    </div>
                    <div className={styles['div2-AdminPanelBodyPart-style']}>
                        <button
                            className={styles['button-AdminPanelBodyPart-style']}
                            onClick={() => toggle_EditView('arboretum')}
                        >
                            Edit
                        </button>
                        <a
                            href="http://50.116.3.37:9001/api/getxlsx/arboretum"
                            download="arboretum.xlsx"
                        >
                            <button className={styles['button-AdminPanelBodyPart-style']}>
                                Download
                            </button>
                        </a>
                        <button
                            className={styles['button-AdminPanelBodyPart-style']}
                            onClick={() => upload_File('arboretum')}
                        >
                            Upload
                            <input
                                title="arboretumUpload"
                                type="file"
                                accept=".xlsx"
                                hidden={true}
                            />
                        </button>
                    </div>
                </div>
                <div className={styles['div1-AdminPanelBodyPart-style']}>
                    <div>
                        <h1>Vivarium</h1>
                    </div>
                    <div className={styles['div2-AdminPanelBodyPart-style']}>
                        <button
                            className={styles['button-AdminPanelBodyPart-style']}
                            onClick={() => toggle_EditView('vivarium')}
                        >
                            Edit
                        </button>
                        <a
                            href="http://50.116.3.37:9001/api/getxlsx/vivarium"
                            download="vivarium.xlsx"
                        >
                            <button className={styles['button-AdminPanelBodyPart-style']}>
                                Download
                            </button>
                        </a>
                        <button
                            className={styles['button-AdminPanelBodyPart-style']}
                            onClick={() => upload_File('vivarium')}
                        >
                            Upload
                            <input
                                title="vivariumUpload"
                                type="file"
                                accept=".xlsx"
                                hidden={true}
                            />
                        </button>
                    </div>
                </div>
                <div className={styles['div1-AdminPanelBodyPart-style']}>
                    <div>
                        <h1>Green House</h1>
                    </div>
                    <div className={styles['div2-AdminPanelBodyPart-style']}>
                        <button
                            className={styles['button-AdminPanelBodyPart-style']}
                            onClick={() => toggle_EditView('green_house')}
                        >
                            Edit
                        </button>
                        <a
                            href="http://50.116.3.37:9001/api/getxlsx/green_house"
                            download="green_house.xlsx"
                        >
                            <button className={styles['button-AdminPanelBodyPart-style']}>
                                Download
                            </button>
                        </a>
                        <button
                            className={styles['button-AdminPanelBodyPart-style']}
                            onClick={() => upload_File('green_house')}
                        >
                            Upload
                            <input
                                title="green_houseUpload"
                                type="file"
                                accept=".xlsx"
                                hidden={true}
                            />
                        </button>
                    </div>
                </div>
                <div className={styles['div1-AdminPanelBodyPart-style']}>
                    <div>
                        <h1>Herbarium</h1>
                    </div>
                    <div className={styles['div2-AdminPanelBodyPart-style']}>
                        <button
                            className={styles['button-AdminPanelBodyPart-style']}
                            onClick={() => toggle_EditView('herbarium')}
                        >
                            Edit
                        </button>
                        <a
                            href="http://50.116.3.37:9001/api/getxlsx/herbarium"
                            download="herbarium.xlsx"
                        >
                            <button className={styles['button-AdminPanelBodyPart-style']}>
                                Download
                            </button>
                        </a>
                        <button
                            className={styles['button-AdminPanelBodyPart-style']}
                            onClick={() => upload_File('herbarium')}
                        >
                            Upload
                            <input
                                title="herbariumUpload"
                                type="file"
                                accept=".xlsx"
                                hidden={true}
                            />
                        </button>
                    </div>
                </div>
                <div className={styles['div1-AdminPanelBodyPart-style']}>
                    <div>
                        <h1>Herps</h1>
                    </div>
                    <div className={styles['div2-AdminPanelBodyPart-style']}>
                        <button
                            className={styles['button-AdminPanelBodyPart-style']}
                            onClick={() => toggle_EditView('herps')}
                        >
                            Edit
                        </button>
                        <a href="http://50.116.3.37:9001/api/getxlsx/herps" download="herps.xlsx">
                            <button className={styles['button-AdminPanelBodyPart-style']}>
                                Download
                            </button>
                        </a>
                        <button
                            className={styles['button-AdminPanelBodyPart-style']}
                            onClick={() => upload_File('herps')}
                        >
                            Upload
                            <input title="herpsUpload" type="file" accept=".xlsx" hidden={true} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
