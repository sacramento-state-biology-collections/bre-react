import styles from './search-engine-view.module.scss';
import classNames from 'classnames';
import { Bre_Search_Header_Part } from '../bre-search-header-part/bre-search-header-part';
import { Bre_Search_Body_Part } from '../bre-search-body-part/bre-search-body-part';

export interface SearchEngineViewProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-search-engine-views-and-templates
 */
export const SearchEngineView = ({ className }: SearchEngineViewProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Bre_Search_Header_Part />
            <Bre_Search_Body_Part />
        </div>
    );
};
