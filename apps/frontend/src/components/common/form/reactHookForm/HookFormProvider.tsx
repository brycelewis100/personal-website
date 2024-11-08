import classNames from 'classnames';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';

type RhfFormProviderProps<T extends FieldValues> = UseFormReturn<T> & {
    children: React.ReactNode;
    onSubmit?: (e: React.FormEvent) => void;
    className?: string;
};

export function RhfFormProvider<T extends FieldValues>({
    onSubmit = (e) => e.preventDefault(),
    children,
    className,
    ...props
}: RhfFormProviderProps<T>) {
    return (
        <FormProvider {...props}>
            <form className={classNames('flex w-full flex-col', className)} onSubmit={onSubmit}>
                {children}
            </form>
        </FormProvider>
    );
}
