import { PrintingEdition } from './printing_editions.interface';
export interface OrderItem {
    amount: number,
    // todo types enum currency
    currency:0 | 1 | 2 | 3,
    printingEdition: PrintingEdition,
    count: number
}