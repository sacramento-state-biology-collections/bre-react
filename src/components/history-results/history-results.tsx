import styles from './history-results.module.scss';
import classNames from 'classnames';

export interface HistoryResultsProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-history-resultss-and-templates
 */
export const HistoryResults = ({ className, children = 'HistoryResults' }: HistoryResultsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className="upload-date">
                Date
                <div className="file-uploads">
                    <span className="File">
                        <div>
                            <img
                                src={'../styles/Microsoft_Office_Excel_(2019–present).svg.png'}
                                className="size-image"
                            />
                        </div>
                        <div>
                            <a href="/" className="padding">
                                Link
                            </a>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
};
