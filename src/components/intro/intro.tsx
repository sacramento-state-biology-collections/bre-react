import styles from './intro.module.scss';
import classNames from 'classnames';

export interface IntroProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-intros-and-templates
 */
export const Intro = ({ className, children = 'Intro' }: IntroProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
