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
    function upload_MammalsFile() {
        let element: HTMLElement = document.querySelector(
            'input[title="mammalsUpload"]'
        ) as HTMLElement;
        element.click();
        element.onchange = () => {
            toggle_LoadingFalse();
            // @ts-ignore: Object is possibly 'null'.
            let file = (element as HTMLInputElement).files[0];
            // post file to server here http://50.116.3.37:9001/api/postxlsx/fish
            let formData = new FormData();
            formData.append('file', file);
            fetch('http://50.116.3.37:9001/api/postxlsx/mammals', {
                method: 'POST',
                body: formData,
            }).then((response) => toggle_LoadingTrue());
        };
    }
    function upload_InsectFile() {
        let element: HTMLElement = document.querySelector(
            'input[title="insectUpload"]'
        ) as HTMLElement;
        element.click();
        element.onchange = () => {
            toggle_LoadingFalse();
            // @ts-ignore: Object is possibly 'null'.
            let file = (element as HTMLInputElement).files[0];
            // post file to server here http://50.116.3.37:9001/api/postxlsx/fish
            let formData = new FormData();
            formData.append('file', file);
            fetch('http://50.116.3.37:9001/api/postxlsx/insects', {
                method: 'POST',
                body: formData,
            }).then((response) => toggle_LoadingTrue());
        };
    }
    function upload_FishFile() {
        let element: HTMLElement = document.querySelector(
            'input[title="fishUpload"]'
        ) as HTMLElement;
        element.click();
        element.onchange = () => {
            toggle_LoadingFalse();
            // @ts-ignore: Object is possibly 'null'.
            let file = (element as HTMLInputElement).files[0];
            // post file to server here http://50.116.3.37:9001/api/postxlsx/fish
            let formData = new FormData();
            formData.append('file', file);
            fetch('http://50.116.3.37:9001/api/postxlsx/fish', {
                method: 'POST',
                body: formData,
            }).then((response) => toggle_LoadingTrue());
        };
    }
    function upload_ArboretumFile() {
        let element: HTMLElement = document.querySelector(
            'input[title="arboretumUpload"]'
        ) as HTMLElement;
        element.click();
        element.onchange = () => {
            toggle_LoadingFalse();
            // @ts-ignore: Object is possibly 'null'.
            let file = (element as HTMLInputElement).files[0];
            // post file to server here http://50.116.3.37:9001/api/postxlsx/fish
            let formData = new FormData();
            formData.append('file', file);
            fetch('http://50.116.3.37:9001/api/postxlsx/arboretum', {
                method: 'POST',
                body: formData,
            }).then((response) => toggle_LoadingTrue());
        };
    }
    function upload_VivariumFile() {
        let element: HTMLElement = document.querySelector(
            'input[title="vivariumUpload"]'
        ) as HTMLElement;
        element.click();
        element.onchange = () => {
            toggle_LoadingFalse();
            // @ts-ignore: Object is possibly 'null'.
            let file = (element as HTMLInputElement).files[0];
            // post file to server here http://50.116.3.37:9001/api/postxlsx/fish
            let formData = new FormData();
            formData.append('file', file);
            fetch('http://50.116.3.37:9001/api/postxlsx/vivarium', {
                method: 'POST',
                body: formData,
            }).then((response) => toggle_LoadingTrue());
        };
    }
    function upload_GreenHouseFile() {
        let element: HTMLElement = document.querySelector(
            'input[title="green_houseUpload"]'
        ) as HTMLElement;
        element.click();
        element.onchange = () => {
            toggle_LoadingFalse();
            // @ts-ignore: Object is possibly 'null'.
            let file = (element as HTMLInputElement).files[0];
            // post file to server here http://50.116.3.37:9001/api/postxlsx/fish
            let formData = new FormData();
            formData.append('file', file);
            fetch('http://50.116.3.37:9001/api/postxlsx/green_house', {
                method: 'POST',
                body: formData,
            }).then((response) => toggle_LoadingTrue());
        };
    }
    function upload_HerbariumFile() {
        let element: HTMLElement = document.querySelector(
            'input[title="herbariumUpload"]'
        ) as HTMLElement;
        element.click();
        element.onchange = () => {
            toggle_LoadingFalse();
            // @ts-ignore: Object is possibly 'null'.
            let file = (element as HTMLInputElement).files[0];
            // post file to server here http://50.116.3.37:9001/api/postxlsx/fish
            let formData = new FormData();
            formData.append('file', file);
            fetch('http://50.116.3.37:9001/api/postxlsx/herbarium', {
                method: 'POST',
                body: formData,
            }).then((response) => toggle_LoadingTrue());
        };
    }
    function upload_HerpsFile() {
        let element: HTMLElement = document.querySelector(
            'input[title="herpsUpload"]'
        ) as HTMLElement;
        element.click();
        element.onchange = () => {
            toggle_LoadingFalse();
            // @ts-ignore: Object is possibly 'null'.
            let file = (element as HTMLInputElement).files[0];
            // post file to server here http://50.116.3.37:9001/api/postxlsx/fish
            let formData = new FormData();
            formData.append('file', file);
            fetch('http://50.116.3.37:9001/api/postxlsx/herps', {
                method: 'POST',
                body: formData,
            }).then((response) => toggle_LoadingTrue());
        };
    }

    function toggle_MammalsEditView() {
        toggle_AdminEditView();
        fetch('http://50.116.3.37:9001/api/mammals_collection')
            .then((response) => response.json())
            .then((Data) => {
                update_AdminEditData(Data);
            });
    }
    function toggle_InsectsEditView() {
        toggle_AdminEditView();
        fetch('http://50.116.3.37:9001/api/insects_collection')
            .then((response) => response.json())
            .then((Data) => {
                update_AdminEditData(Data);
            });
    }
    function toggle_FishEditView() {
        toggle_AdminEditView();
        fetch('http://50.116.3.37:9001/api/fish_collection')
            .then((response) => response.json())
            .then((Data) => {
                update_AdminEditData(Data);
            });
    }
    function toggle_ArboretumEditView() {
        toggle_AdminEditView();
        fetch('http://50.116.3.37:9001/api/arboretum_collection')
            .then((response) => response.json())
            .then((Data) => {
                update_AdminEditData(Data);
            });
    }
    function toggle_VivariumEditView() {
        toggle_AdminEditView();
        fetch('http://50.116.3.37:9001/api/vivarium_collection')
            .then((response) => response.json())
            .then((Data) => {
                update_AdminEditData(Data);
            });
    }
    function toggle_GreenHouseEditView() {
        toggle_AdminEditView();
        fetch('http://50.116.3.37:9001/api/green_house_collection')
            .then((response) => response.json())
            .then((Data) => {
                update_AdminEditData(Data);
            });
    }
    function toggle_HerbariumEditView() {
        toggle_AdminEditView();
        fetch('http://50.116.3.37:9001/api/herbarium_collection')
            .then((response) => response.json())
            .then((Data) => {
                update_AdminEditData(Data);
            });
    }
    function toggle_HerpsEditView() {
        toggle_AdminEditView();
        fetch('http://50.116.3.37:9001/api/herps_collection')
            .then((response) => response.json())
            .then((Data) => {
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
                            onClick={toggle_MammalsEditView}
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
                            onClick={upload_MammalsFile}
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
                            onClick={toggle_InsectsEditView}
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
                            onClick={upload_InsectFile}
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
                            onClick={toggle_FishEditView}
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
                            onClick={upload_FishFile}
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
                            onClick={toggle_ArboretumEditView}
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
                            onClick={upload_ArboretumFile}
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
                            onClick={toggle_VivariumEditView}
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
                            onClick={upload_VivariumFile}
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
                            onClick={toggle_GreenHouseEditView}
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
                            onClick={upload_GreenHouseFile}
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
                            onClick={toggle_HerbariumEditView}
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
                            onClick={upload_HerbariumFile}
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
                            onClick={toggle_HerpsEditView}
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
                            onClick={upload_HerpsFile}
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
