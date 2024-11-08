import { PageSection } from '../../components/layout/PageContent';
import { RhfFormProvider } from '../../components/common/form/reactHookForm/HookFormProvider';
import { useForm } from 'react-hook-form';
import { FinanceSectionHeader } from './components/FinanceSectionHeader';
import { FinanceSectionTable } from './components/FinanceSectionTable';
import { FinanceSummary } from './components/FinanceSummary';

export type Detail = {
    category: string;
    amount: number;
    period: 'paycheck' | 'monthly';
};

export type FormType = {
    income: Detail[];
    fixed: Detail[];
    invest: Detail[];
    savings: Detail[];
};

export default function Projects() {
    const form = useForm<FormType>();
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

                <FinanceSummary />
            </RhfFormProvider>
        </PageSection>
    );
}
