import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export type Detail = {
    category: string;
    amount: number;
    period: 'paycheck' | 'monthly';
};

type FinanceState = {
    form: {
        income: Detail[];
        fixed: Detail[];
        invest: Detail[];
        savings: Detail[];
    };
};

const initialState: FinanceState = {
    form: {
        income: [],
        fixed: [],
        invest: [],
        savings: [],
    },
};

const financeSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        saveFinanceForm: (state, action: PayloadAction<{ data: FinanceState['form'] }>) => {
            state.form = action.payload.data;
        },
    },
});

export const getCurrentFinanceForm = (state: RootState) => {
    return state.finance.form;
};

// Action creators are generated for each case reducer function
export const {
    actions: { saveFinanceForm },
    reducer: financeSliceReducer,
} = financeSlice;
