import styles from './admin-panel-body-part.module.scss';
import classNames from 'classnames';

export interface Admin_Panel_Body_PartProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-panel-body-parts-and-templates
 */
export const Admin_Panel_Body_Part = ({ className }: Admin_Panel_Body_PartProps) => {
    function upload_MammalFile() {
        let element: HTMLElement = document.querySelector(
            'input[title="mammalsUpload"]'
        ) as HTMLElement;
        element.click();
    }
    function upload_FishFile() {
        let element: HTMLElement = document.querySelector(
            'input[title="fishUpload"]'
        ) as HTMLElement;
        element.click();
        element.onchange = () => {
            // @ts-ignore: Object is possibly 'null'.
            let file = (element as HTMLInputElement).files[0];
            // post file to server here http://50.116.3.37:9001/api/postxlsx/fish
            let formData = new FormData();
            formData.append('file', file);
            fetch('http://50.116.3.37:9001/api/postxlsx/fish', {
                method: 'POST',
                body: formData,
            });
        };
    }

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-AdminPanelBodyPart-style']}>
                <div className={styles['div1-AdminPanelBodyPart-style']}>
                    <div>
                        <h1>Mammals</h1>
                    </div>
                    <div className={styles['div2-AdminPanelBodyPart-style']}>
                        <button className={styles['button-AdminPanelBodyPart-style']}>Edit</button>
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
                            onClick={upload_MammalFile}
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
                        <button className={styles['button-AdminPanelBodyPart-style']}>Edit</button>
                        <a
                            href="http://50.116.3.37:9001/api/getxlsx/insects"
                            download="insects.xlsx"
                        >
                            <button className={styles['button-AdminPanelBodyPart-style']}>
                                Download
                            </button>
                        </a>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Upload
                        </button>
                    </div>
                </div>
                <div className={styles['div1-AdminPanelBodyPart-style']}>
                    <div>
                        <h1>Fish</h1>
                    </div>
                    <div className={styles['div2-AdminPanelBodyPart-style']}>
                        <button className={styles['button-AdminPanelBodyPart-style']}>Edit</button>
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
                            <input
                                title="fishUpload"
                                type="file"
                                accept=".xlsx"
                                hidden={true}
                            />
                        </button>
                    </div>
                </div>
                <div className={styles['div1-AdminPanelBodyPart-style']}>
                    <div>
                        <h1>Arboretum</h1>
                    </div>
                    <div className={styles['div2-AdminPanelBodyPart-style']}>
                        <button className={styles['button-AdminPanelBodyPart-style']}>Edit</button>
                        <a
                            href="http://50.116.3.37:9001/api/getxlsx/arboretum"
                            download="arboretum.xlsx"
                        >
                            <button className={styles['button-AdminPanelBodyPart-style']}>
                                Download
                            </button>
                        </a>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Upload
                        </button>
                    </div>
                </div>
                <div className={styles['div1-AdminPanelBodyPart-style']}>
                    <div>
                        <h1>Vivarium</h1>
                    </div>
                    <div className={styles['div2-AdminPanelBodyPart-style']}>
                        <button className={styles['button-AdminPanelBodyPart-style']}>Edit</button>
                        <a
                            href="http://50.116.3.37:9001/api/getxlsx/vivarium"
                            download="vivarium.xlsx"
                        >
                            <button className={styles['button-AdminPanelBodyPart-style']}>
                                Download
                            </button>
                        </a>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Upload
                        </button>
                    </div>
                </div>
                <div className={styles['div1-AdminPanelBodyPart-style']}>
                    <div>
                        <h1>Green House</h1>
                    </div>
                    <div className={styles['div2-AdminPanelBodyPart-style']}>
                        <button className={styles['button-AdminPanelBodyPart-style']}>Edit</button>
                        <a
                            href="http://50.116.3.37:9001/api/getxlsx/green_house"
                            download="green_house.xlsx"
                        >
                            <button className={styles['button-AdminPanelBodyPart-style']}>
                                Download
                            </button>
                        </a>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Upload
                        </button>
                    </div>
                </div>
                <div className={styles['div1-AdminPanelBodyPart-style']}>
                    <div>
                        <h1>Herbarium</h1>
                    </div>
                    <div className={styles['div2-AdminPanelBodyPart-style']}>
                        <button className={styles['button-AdminPanelBodyPart-style']}>Edit</button>
                        <a
                            href="http://50.116.3.37:9001/api/getxlsx/herbarium"
                            download="herbarium.xlsx"
                        >
                            <button className={styles['button-AdminPanelBodyPart-style']}>
                                Download
                            </button>
                        </a>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Upload
                        </button>
                    </div>
                </div>
                <div className={styles['div1-AdminPanelBodyPart-style']}>
                    <div>
                        <h1>Herps</h1>
                    </div>
                    <div className={styles['div2-AdminPanelBodyPart-style']}>
                        <button className={styles['button-AdminPanelBodyPart-style']}>Edit</button>
                        <a href="http://50.116.3.37:9001/api/getxlsx/herps" download="herps.xlsx">
                            <button className={styles['button-AdminPanelBodyPart-style']}>
                                Download
                            </button>
                        </a>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
