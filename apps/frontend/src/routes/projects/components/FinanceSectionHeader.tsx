import { useFormContext, useWatch } from 'react-hook-form';
import { FormType } from '../route';
import { calculateSectionTotal } from '../util';
import { formatMoney } from '../../../components/common/util/money';

export function FinanceSectionHeader({
    header,
    children,
    name,
}: {
    header: React.ReactNode;
    children?: React.ReactNode;
    name: keyof FormType;
}) {
    const form = useFormContext<FormType>();
    const { control } = form;
    const details = useWatch({ name, control });

    return (
        <div className="flex justify-between">
            <div className="uppercase font-semibold">{header}</div>
            <div>{formatMoney({ amount: calculateSectionTotal(details) })}</div>
        </div>
    );
}
