import classNames from 'classnames';
import { forwardRef } from 'react';

export type TextInputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    /**
     * Sets the TextInput into an error state, usually indicated by a red border.
     */
    error?: boolean;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
    { error, className, ...inputProps },
    ref,
) {
    const input = (
        <input
            aria-invalid={error ? 'true' : 'false'}
            ref={ref}
            className={classNames(
                className,
                'border-cycle-gray-light text-cycle-gray peer min-h-[40px] w-full min-w-0  border px-4 outline-none',
                // light disabled
                'disabled:bg-cycle-gray/10 disabled:cursor-not-allowed',
                // focus
                'focus:ring-cycle-blue focus:border-transparent focus:ring-2',
                // dark
                'dark:bg-cycle-gray-accent dark:text-cycle-white-accent dark:border-transparent',
                // dark disabled
                'dark:disabled:bg-black dark:disabled:text-opacity-50',

                { 'focus:ring-cycle-blue': !error },
                {
                    'ring-error border-transparent ring-2': !!error,
                },
                'read-only:bg-cycle-white-accent read-only:cursor-not-allowed dark:read-only:bg-black',
            )}
            onWheel={(e) => e.currentTarget.blur()}
            {...inputProps}
        />
    );

    return <div className="group flex min-w-0 grow ">{input}</div>;
});
