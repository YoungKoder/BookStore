import React from "react";
import { PrintingEdition } from "../types/printingEdition";
import { PrintingEditionCtx } from "../types/contextTypes/printingEditionsContext.types";

export const contextPrintingEdition = React.createContext<PrintingEditionCtx |PrintingEdition[]| null>(null);
export const BookStoreServiceProviderBooks = contextPrintingEdition.Provider;

export const BookStoreServiceConsumerBooks = contextPrintingEdition.Consumer;