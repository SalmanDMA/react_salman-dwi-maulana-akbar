import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from '../store/slices/todoSlices';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
 todo: todoReducer,
});

const persistConfig = {
 key: 'root',
 storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
 reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
