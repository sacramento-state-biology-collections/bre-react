import styles from './admin-collection-view.module.scss';
import classNames from 'classnames';

export interface AdminCollectionViewProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-admin-collection-views-and-templates
 */
export const AdminCollectionView = ({ className }: AdminCollectionViewProps) => {
    return <div className={classNames(styles.root, className)}>AdminCollectionView</div>;
};
