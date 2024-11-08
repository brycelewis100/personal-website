import classNames from 'classnames';

type FieldErrorProps = {
    message: string | undefined;
    className?: string;
};

export function FieldError({ message, className }: FieldErrorProps) {
    if (!message) return null;
    return (
        <p role="alert" className={classNames(className, 'text-error text-sm font-semibold')}>
            {message}
        </p>
    );
}
