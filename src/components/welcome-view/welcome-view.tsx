import styles from './welcome-view.module.scss';
import classNames from 'classnames';
import { Welcome_Header_Part } from '../welcome-header-part/welcome-header-part';
import { Welcome_Body_Part } from '../welcome-body-part/welcome-body-part';

export interface WelcomeViewProps {
    className?: string;
    toggle_TableEngineView: () => void;
    toggle_AdminLoginView: () => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-welcome-views-and-templates
 */
export const WelcomeView = ({
    className,
    toggle_TableEngineView,
    toggle_AdminLoginView,
}: WelcomeViewProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Welcome_Header_Part toggle_AdminLoginView={toggle_AdminLoginView} />
            <Welcome_Body_Part toggle_TableEngineView={toggle_TableEngineView} />
        </div>
    );
};
