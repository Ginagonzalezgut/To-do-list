import React, { createContext } from "react";

//1.creo el contexto
const ShareContext = createContext();

//2. exporto el provedor
export const ShareProvider = ShareContext.Provider;

export default ShareContext;
