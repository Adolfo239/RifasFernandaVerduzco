export interface Boleto {
    id?: number,
    number: string,
    available: boolean,
    buyerName?: string
    buyerAddress?: string,
    buyerPhone?: number,
    buyerEmail?: string,
    boletoClass?: string
}

export interface BoletoBuyDto {
    boletoId?: number,
    number: string[],
    sorteoId: number, 
    sorteoDescription: string,
    competitorName: string,
    competitorLastName: string,
    competitorPhoneNumber: string,
    competitorEmail: string,
    competitorState: string,
    boletoClass?: string
}

export interface BoletoDto {
    boletoId?: number,
    number?: string,
    sorteoId?: number,
    sorteoDescription?: string,
    competitorName?: string,
    competitorLastName?: string,
    competitorPhoneNumber?: string,
    competitorEmail?: string,
    competitorState?: string,
    boletoStatus?: string,
    boletoDate?: string,
    boletoClass?: string,
    available?: boolean,
}

export interface BoletoDtoo {
    boletoId: number,
    number: string,
    sorteoID: number,
    sorteoDescription: string,
    competitorName: string,
    competitorLastName: string,
    competitorPhoneNumber: string,
    competitorEmail: string,
    competitorState: string,
    boletoStatus: string,
    boletoDate: string
}