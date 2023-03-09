import styles from './welcome-view.module.scss';
import classNames from 'classnames';
import { Welcome_Header_Part } from '../welcome-header-part/welcome-header-part';
import { Welcome_Body_Part } from '../welcome-body-part/welcome-body-part';

export interface WelcomeViewProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-welcome-views-and-templates
 */
export const WelcomeView = ({ className }: WelcomeViewProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Welcome_Header_Part />
            <Welcome_Body_Part />
        </div>
    );
};
