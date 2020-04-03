import React from "react";
import { printingEditionContext } from "../types/contexts/printingEditionContext";

const contextPrintingEdition = React.createContext<printingEditionContext[]| null>(null);
export const BookStoreServiceProviderBooks = contextPrintingEdition.Provider;

export const BookStoreServiceConsumerBooks = contextPrintingEdition.Consumer;