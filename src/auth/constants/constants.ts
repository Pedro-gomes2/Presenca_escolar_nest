//Aqui você está exportando um objeto chamado jwtConstants.
//Isso permite que ele seja importado em outros arquivos do projeto, como no módulo de autenticação.
export const jwtConstants = {
    // Lê do ambiente; fallback para desenvolvimento local
    secret: process.env.JWT_SECRET || '37eb3d74e44561d2b9ec3e40da179f9e91571b7f350aee31cfee06b481f146fe',
};// https://generate-random.org/encryption-keys