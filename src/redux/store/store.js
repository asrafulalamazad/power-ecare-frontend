import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/setting-slice"

export default configureStore({
    reducer: {
        settings: settingsReducer,

    }
})