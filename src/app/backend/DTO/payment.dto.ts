export interface PaymentDto{
    id? : number;
    TITULAR_NAME : string;
    CPF : string;
    NUMBER : number;
    CVV : number;
    EXPIRING_DATE : string;
    EXPIRING_DATE_MONTH: string;
}