export interface Publicaciones {

    id: number,
    usuario: string,
    contenido: string,
    likes: number
    respuestas: [{
        usuario:string,
        contenido : string
    }]
}
