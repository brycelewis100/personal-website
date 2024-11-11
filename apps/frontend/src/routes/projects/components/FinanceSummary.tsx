import { useFormContext, useWatch } from 'react-hook-form';
import { FormType } from '../route';
import { calculateSectionTotal } from '../util';
import { useMemo } from 'react';
import { formatMoney } from '../../../components/common/util/money';
import { FinancePieChart } from './FinancePieChart';
import { Button } from '../../../components/common/buttons/Button';
import { useAppDispatch } from '../../../hooks';

export function FinanceSummary({ onSave }: { onSave: (data: FormType) => void }) {
    const form = useFormContext<FormType>();
    const { control } = form;

    const income = useWatch({ name: 'income', control });
    const fixed = useWatch({ name: 'fixed', control });
    const invest = useWatch({ name: 'invest', control });
    const savings = useWatch({ name: 'savings', control });

    const incomeTotal = useMemo(() => calculateSectionTotal(income), [income]);
    const fixedTotal = useMemo(() => calculateSectionTotal(fixed), [fixed]);
    const investTotal = useMemo(() => calculateSectionTotal(invest), [invest]);
    const savingsTotal = useMemo(() => calculateSectionTotal(savings), [savings]);

    const guiltFreeSpending = useMemo(
        () => incomeTotal - fixedTotal - investTotal - savingsTotal,
        [incomeTotal, fixedTotal, investTotal, savingsTotal],
    );

    return (
        <div className="border rounded-md p-4 flex justify-between items-center">
            <div className="h-[20rem] w-[20rem] ">
                <FinancePieChart
                    guiltFree={guiltFreeSpending}
                    fixed={fixedTotal}
                    invest={investTotal}
                    savings={savingsTotal}
                />
            </div>

            <div className="pr-16">
                <div>Guilt Free Spending</div>
                <div className="text-xl">
                    {formatMoney({ amount: incomeTotal - fixedTotal - investTotal - savingsTotal })}
                </div>
                <Button onClick={form.handleSubmit(onSave)}>Save</Button>
            </div>
        </div>
    );
}
