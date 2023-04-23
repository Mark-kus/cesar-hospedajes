const { configureStore } = require("@reduxjs/toolkit");
const { createWrapper } = require("next-redux-wrapper");

// Defino mi store
const store = () =>
    configureStore({
        reducer: {},
        devTools: true,
    })

// El wraper es para integrar el store a la app en next.js
// El store se actualiza en el servidor, y next-redux-wrapper lo manda al cliente
export const wrapper = createWrapper(store);