import { configureStore } from '@reduxjs/toolkit'
import contactsReduser from './contactsSlice '
import userSlice from '../../Pages/Redux-Toolkit/Features/User/UserSlice';
import todoSlice from '../../Pages/Redux-Toolkit/Features/Todo/TodoSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,

};

 const store = configureStore({
  reducer: {
     contacts: persistReducer(persistConfig, contactsReduser),
     user: persistReducer(persistConfig,userSlice) ,
     todo: persistReducer(persistConfig,todoSlice) ,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
 const persistor = persistStore(store)

export { store, persistor };