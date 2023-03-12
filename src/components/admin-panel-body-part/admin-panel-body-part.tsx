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
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-AdminPanelBodyPart-style']}>
                <div className={styles['div1-AdminPanelBodyPart-style']}>
                    <div>
                        <h1>Mammals</h1>
                    </div>
                    <div className={styles['div2-AdminPanelBodyPart-style']}>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Edit
                        </button>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Download
                        </button>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Upload
                        </button>
                    </div>
                </div>
                <div className={styles['div1-AdminPanelBodyPart-style']}>
                    <div>
                        <h1>Insects</h1>
                    </div>
                    <div className={styles['div2-AdminPanelBodyPart-style']}>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Edit
                        </button>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Download
                        </button>
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
                       <button className={styles['button-AdminPanelBodyPart-style']}>
                            Edit
                        </button>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Download
                        </button>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Upload
                        </button>
                    </div>
                </div>
                <div className={styles['div1-AdminPanelBodyPart-style']}>
                    <div>
                        <h1>Arboretum</h1>
                    </div>
                    <div className={styles['div2-AdminPanelBodyPart-style']}>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Edit
                        </button>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Download
                        </button>
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
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Edit
                        </button>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Download
                        </button>
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
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Edit
                        </button>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Download
                        </button>
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
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Edit
                        </button>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Download
                        </button>
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
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Edit
                        </button>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Download
                        </button>
                        <button className={styles['button-AdminPanelBodyPart-style']}>
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
