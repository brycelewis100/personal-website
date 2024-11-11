import * as React from 'react';
import classNames from 'classnames';

export type ButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> &
    CycleButtonProps;

export type CycleButtonProps = {
    /**
     * The type of button.
     * @default default
     */

    flavor?: 'default' | 'primary' | 'discard';

    className?: string;
    disabled?: boolean;
    glow?: boolean;
    children?: React.ReactNode;
};

/**
 * Generates a consistent style for block elements to appear as buttons
 */
export function generateButtonClasses({
    flavor = 'default',
    className,
    disabled,
    glow,
}: CycleButtonProps) {
    let flavorStyles = '';

    switch (flavor) {
        case 'default':
            flavorStyles = classNames(
                'border border-bryce-blue text-bryce-blue bg-transparent shadow-bryce-blue enabled:hover:border-bryce-blue-accent hover:text-bryce-black hover:bg-bryce-blue',
                // default dark
                'dark:text-bryce-white enabled:dark:hover:text-bryce-gray',
                //
                'focus:ring focus:dark:ring-bryce-blue-accent',
            );
            break;
        case 'primary':
            flavorStyles = classNames(
                'bg-bryce-blue text-bryce-white shadow-bryce-blue hover:text-bryce-black',
                // primary dark
                'focus:dark:ring-offset-bryce-blue',
            );
            break;
        case 'discard':
            flavorStyles = classNames(
                'border-error text-error enabled:hover:border-error hover:bg-transparent enabled:hover:text-bryce-white enabled:hover:bg-error border bg-transparent shadow-bryce-blue',
                // discard dark
                'dark:text-bryce-white enabled:dark:hover:text-bryce-black',
            );
    }

    return classNames(
        className,
        'px-4 rounded-md py-2 whitespace-nowrap font-semibold transition outline-none text-center select-none uppercase tracking-normal',
        'focus:ring focus:dark:ring-bryce-blue-accent',

        glow && 'shadow-glow',
        flavorStyles,
        // Global Disabled
        disabled && 'cursor-not-allowed disabled:cursor-not-allowed',
        // disabled states
        'disabled:bg-bryce-gray-accent/20 disabled:text-bryce-gray/50 disabled:!border-bryce-gray-accent/50 border',
        // dark disabled states
        'disabled:dark:text-bryce-gray-light disabled:dark:border-bryce-gray disabled:dark:bg-bryce-gray-accent/20',
    );
}

export const Button: React.FC<ButtonProps> = ({
    flavor = 'default',
    className,
    disabled,
    children,
    ...props
}) => {
    return (
        <button
            // Default to button typing so we don't accidentally submit forms.
            type="button"
            {...props}
            disabled={disabled}
            className={generateButtonClasses({
                flavor,
                className,
                disabled,
            })}
        >
            {children}
        </button>
    );
};
