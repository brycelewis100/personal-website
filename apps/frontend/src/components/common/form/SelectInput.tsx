import classNames from 'classnames';
import { forwardRef } from 'react';

export type SelectInputProps = React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
> & {
    /**
     * Sets the SelectInput into an error state, usually indicated by a red border.
     */
    error?: boolean;
    options: { value: string; label: string }[];
};

export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(function SelectInput(
    { error, className, options, ...selectProps },
    ref,
) {
    const select = (
        <select
            aria-invalid={error ? 'true' : 'false'}
            ref={ref}
            className={classNames(
                className,
                'border-cycle-gray-light text-cycle-gray peer min-h-[40px] w-full min-w-0 border px-4 outline-none',
                // light disabled
                'disabled:bg-cycle-gray/10 disabled:cursor-not-allowed',
                // focus
                'focus:ring-cycle-blue focus:border-transparent focus:ring-2',
                // dark
                'dark:bg-cycle-gray-accent dark:text-cycle-white-accent dark:border-transparent',
                // dark disabled
                'dark:disabled:bg-black dark:disabled:text-opacity-50',

                { 'focus:ring-cycle-blue': !error },
                { 'ring-error border-transparent ring-2': !!error },
                'read-only:bg-cycle-white-accent read-only:cursor-not-allowed dark:read-only:bg-black',
            )}
            {...selectProps}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );

    return <div className="group flex min-w-0 grow">{select}</div>;
});
