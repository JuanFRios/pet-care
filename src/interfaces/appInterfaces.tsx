export enum categories {
    medicine = 'medicine',
    spa = 'spa',
    kindergarten = 'kindergarten',
}

// Generated by https://quicktype.io
export interface LoginData {
    usuario:   string;
    contraseña: string;
}


export interface LoginResponse {
    usuario: Usuario;
    token:   string;
}

export interface Usuario {
    nombre: string;
    correo: string;
    uid:    string;
}


// Servicios
// Generated by https://quicktype.io
export interface ServicesResponse {
    total:     number;
    servicios: Service[];
}

export interface Service {
    id:       string;
    nombre:    string;
}


