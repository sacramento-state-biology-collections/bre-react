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
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
