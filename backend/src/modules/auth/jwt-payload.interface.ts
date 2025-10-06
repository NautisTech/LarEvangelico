export interface JwtPayload {
    username: string;
    sub: number; // O "sub" geralmente é o ID do utilizador
}