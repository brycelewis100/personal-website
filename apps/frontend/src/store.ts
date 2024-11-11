import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import { financeSliceReducer } from './modules/finance/slice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['finance'],
};

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        finance: financeSliceReducer,
    }),
);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: {
                // Ignore these Redux-Persist specific actions
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
                // Ignore these paths from the state if they contain non-serializable values
                ignoredPaths: ['register', 'rehydrate'],
            },
        });
    },
    devTools: {
        maxAge: 50,
    },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
