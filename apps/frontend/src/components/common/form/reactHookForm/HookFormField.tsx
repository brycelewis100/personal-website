import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { FieldError } from '../FieldError';
import { Children, cloneElement, useEffect, useState } from 'react';
import { FieldLabel } from '../FieldLabel';

type HookFormFieldProps = {
    name: string;
    label?: string;
    children: React.ReactElement;
    className?: string;
};

export function HookFormField({ label, name, children, className }: HookFormFieldProps) {
    const {
        formState: { errors },
    } = useFormContext();

    const [debouncedErrors, setDebouncedErrors] = useState(errors);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedErrors(errors);
        }, 200);

        return () => {
            clearTimeout(handler);
        };
    }, [errors]);

    return (
        <div
            className={classNames(
                className,
                'mb-4 mt-2',
                'relative w-full min-w-0',
                label ? 'mb-4 mt-2' : 'py-2',
            )}
        >
            {label ? (
                <label className="inline" htmlFor={name}>
                    <div className={classNames('flex items-center text-sm font-semibold ')}>
                        <FieldLabel className="pb-2" label={label} />
                    </div>
                </label>
            ) : null}

            {Children.map(children, (child) =>
                cloneElement(child, {
                    id: name,
                    error: !!errors[name]?.message,
                }),
            )}
            <div className="absolute w-full">
                <ErrorMessage
                    errors={debouncedErrors}
                    name={name}
                    render={({ message }) => (
                        <FieldError className="relative text-end " message={message} />
                    )}
                />
            </div>
        </div>
    );
}
