import styles from './card-view.module.scss';
import classNames from 'classnames';

export interface CardViewProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-card-views-and-templates
 */
export const CardView = ({ className, children = 'CardView' }: CardViewProps) => {
    return (
        <div className="card-div">
            <div className="card-content-div">
                <div className="card-image-div">
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        className="card-img"
                    />
                </div>
                <div className="card-info-div">
                    <h1>Heading 1</h1>
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
            </div>
            <div className="card-buttons-div">
                <button
                    className={classNames(
                        styles['exit-preview-button'],
                        styles['exit-preview-button']
                    )}
                >
                    X
                </button>
                <button className={styles['more-info-button']}>All Info</button>
            </div>
        </div>
    );
};
