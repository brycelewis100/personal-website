import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { TextInput } from '../../../components/common/form/TextInput';
import { Table } from '../../../components/common/tables/Table';
import { TableCell } from '../../../components/common/tables/TableCell';
import { TableHead } from '../../../components/common/tables/TableHead';
import { TableHeaderCell } from '../../../components/common/tables/TableHeaderCell';
import { TableRow } from '../../../components/common/tables/TableRow';
import { FormType } from '../route';
import { SelectInput } from '../../../components/common/form/SelectInput';
import { calculateDetailTotal } from '../util';
import { formatMoney } from '../../../components/common/util/money';
import { Detail } from '../../../modules/finance/slice';

export function FinanceSectionTable({ name }: { name: keyof FormType }) {
    const form = useFormContext<FormType>();

    const { control } = form;

    const { fields, append, remove } = useFieldArray({
        name: name,
        control,
    });

    return (
        <div className="pb-8 pt-4">
            <Table>
                <TableHead>
                    <TableHeaderCell className="w-1/4">Category</TableHeaderCell>
                    <TableHeaderCell className="w-1/4">Amount</TableHeaderCell>
                    <TableHeaderCell className="w-1/4">Period</TableHeaderCell>
                    <TableHeaderCell className="w-1/4">Total</TableHeaderCell>
                </TableHead>
                <tbody>
                    {fields.map((f, idx) => (
                        <FinanceTableRow f={f} idx={idx} name={name} />
                    ))}
                </tbody>
            </Table>
            <button
                className=" text-bryce-blue"
                onClick={() => append({ category: '', amount: 0, period: 'monthly' })}
            >
                + Add Item
            </button>
        </div>
    );
}

function FinanceTableRow({ f, idx, name }: { f: Detail; idx: number; name: keyof FormType }) {
    const form = useFormContext<FormType>();
    const { register, control } = form;

    const detail = useWatch({ name: `${name}.${idx}`, control });

    return (
        <TableRow>
            <TableCell>
                <TextInput {...register(`${name}.${idx}.category`)} />
            </TableCell>
            <TableCell>
                <TextInput {...register(`${name}.${idx}.amount`)} />
            </TableCell>
            <TableCell>
                <SelectInput
                    {...register(`${name}.${idx}.period`)}
                    options={[
                        { value: 'monthly', label: 'Monthly' },
                        { value: 'paycheck', label: 'Per Paycheck' },
                    ]}
                />
            </TableCell>
            <TableCell className="">
                {formatMoney({ amount: calculateDetailTotal(detail) })}
            </TableCell>
        </TableRow>
    );
}
