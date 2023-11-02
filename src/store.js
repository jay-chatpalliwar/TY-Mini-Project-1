import { configureStore } from '@reduxjs/toolkit'
import replyReducer from './Slices/replySlice'
import updateReducer from './Slices/updateSlice'

export default configureStore({
  reducer: {
    reply : replyReducer,
    update :updateReducer

  },
})