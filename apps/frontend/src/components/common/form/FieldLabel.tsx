import classNames from 'classnames';

export function FieldLabel({
    label,
    labelClassName,
    className,
}: {
    label: string;
    labelClassName?: string;
    className?: string;
}) {
    return (
        <div className={classNames('flex items-center text-sm font-semibold ', className)}>
            {label ? (
                <span
                    className={classNames('whitespace-nowrap uppercase leading-3', labelClassName)}
                >
                    {label}
                </span>
            ) : null}
        </div>
    );
}
