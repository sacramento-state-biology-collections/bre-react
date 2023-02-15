import styles from './demo-view.module.scss';
import classNames from 'classnames';
import { LoginRibbon } from '../login-ribbon/login-ribbon';
import { DemoPage } from '../demo-page/demo-page';

export interface DemoViewProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-demo-views-and-templates
 */
export const DemoView = ({ className, children = 'DemoView' }: DemoViewProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <LoginRibbon />
            <DemoPage />
        </div>
    );
};
