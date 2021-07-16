import { IsNotEmpty } from "class-validator";
import { Empresa } from "../empresa/empresa.model";

export class Entidad {
    
    codigo: number

    codigo_dolphin: number;//codigo usuario dolphin

    telefono: string;

    empresa: Empresa;

    nombre: string;
    
    accountId: string;

    padron: boolean;   
}
