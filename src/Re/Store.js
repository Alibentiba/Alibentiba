
import { configureStore } from '@reduxjs/toolkit'

import Slice from './Slice'

const Store = configureStore({
  reducer: {userStore: Slice},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
export default Store