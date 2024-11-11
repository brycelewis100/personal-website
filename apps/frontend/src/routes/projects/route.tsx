import { PageSection } from '../../components/layout/PageContent';
import { RhfFormProvider } from '../../components/common/form/reactHookForm/HookFormProvider';
import { useForm } from 'react-hook-form';
import { FinanceSectionHeader } from './components/FinanceSectionHeader';
import { FinanceSectionTable } from './components/FinanceSectionTable';
import { FinanceSummary } from './components/FinanceSummary';
import { Detail, getCurrentFinanceForm, saveFinanceForm } from '../../modules/finance/slice';
import { useAppDispatch, useAppSelector } from '../../hooks';

export type FormType = {
    income: Detail[];
    fixed: Detail[];
    invest: Detail[];
    savings: Detail[];
};

export default function Projects() {
    const loadedFormData = useAppSelector(getCurrentFinanceForm);

    const form = useForm<FormType>({
        defaultValues: loadedFormData,
    });
    const dispatch = useAppDispatch();

    const onSave = (data: FormType) => {
        console.log(data);
        dispatch(saveFinanceForm({ data }));
    };
    return (
        <PageSection>
            <RhfFormProvider {...form} className="pt-24">
                <FinanceSectionHeader header="Income" name="income" />
                <FinanceSectionTable name="income" />

                <FinanceSectionHeader header="Fixed Costs" name="fixed" />
                <FinanceSectionTable name="fixed" />

                <FinanceSectionHeader header="Investments" name="invest" />
                <FinanceSectionTable name="invest" />

                <FinanceSectionHeader header="Savings" name="savings" />
                <FinanceSectionTable name="savings" />

                <FinanceSummary onSave={onSave} />
            </RhfFormProvider>
        </PageSection>
    );
}
