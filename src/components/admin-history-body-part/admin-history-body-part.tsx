import styles from './admin-history-body-part.module.scss';
import ip_addresses from '../../ip_addresses.json';
import classNames from 'classnames';

export interface Admin_History_Body_PartProps {
    className?: string;
    str_History: string;
    arr_History: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-history-body-parts-and-templates
 */
export const Admin_History_Body_Part = ({
    className,
    str_History,
    arr_History,
}: Admin_History_Body_PartProps) => {
    const ipAddress = ip_addresses.ip;

    function history() {
        return arr_History;
    }

    function createLinks() {
        if (str_History === 'History') {
            return <div></div>;
        } else {
            console.log(arr_History);
            return history().map((item: any, index: number) => {
                return (
                    <div className={styles['div2-AdminHistoryBodyPart-style']} key={index}>
                        <span className={styles['span-AdminHistoryBodyPart-style']}>
                            <img
                                src={
                                    'https://logodownload.org/wp-content/uploads/2020/04/excel-logo-0.png'
                                }
                                className={styles['img-AdminHistoryBodyPart-style']}
                                title={'Excel Logo'}
                            />
                            <a
                                href={`http://${ipAddress}:9001/api/file/history/${str_History}/${item}`}
                                className={styles['a-AdminHistoryBodyPart-style']}
                            >
                                {item}
                            </a>
                        </span>
                    </div>
                );
            });
        }
    }

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['div0-AdminHistoryBodyPart-style']}>{createLinks()}</div>
        </div>
    );
};
