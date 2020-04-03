import React from "react";
import { PrintingEdition } from "../types/printingEdition";

const contextPrintingEdition = React.createContext<PrintingEdition[]| null>(null);
export const BookStoreServiceProviderBooks = contextPrintingEdition.Provider;

export const BookStoreServiceConsumerBooks = contextPrintingEdition.Consumer;