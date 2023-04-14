import { UUID } from "crypto";

export interface ICarModelRequest{
    branded:string,
    model: string,
    year: string,
    fuel: string,
}

export interface ICarModelResponse{
    id: UUID;
    branded:string,
    model: string,
    year: string,
    fuel: string,
}
export interface ICarModelRequestGetModel{
    model: string,
}
  
   

export interface ICarModelUpdate{
    branded?:string,
    model?: string,
    year?: string,
    fuel?: string,
}