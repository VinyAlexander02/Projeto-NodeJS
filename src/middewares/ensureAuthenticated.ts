import {Request, Response, NextFunction} from "express";
import { verify } from 'jsonwebtoken'


interface IPayLoad{
    sub: string;
}

export  function esureAuthenticated(request: Request, response: Response, next: NextFunction) {
    // Receber o token 
    const authToken = request.headers.authorization

    // Validar se o token está preenchido 
    if(!authToken) {
        return response.status(401).end();
    }

    const [ ,token] = authToken.split(" ")
    console.log(token)

    // Validar se o token é válido
    try {
        const { sub } = verify( token ,"faf2d565aa2365c9bb6bb330d0504ee2") as IPayLoad

         //Recuperar informações do usuário
        request.user_id = sub;

        return next()

    } catch(err) {
        return response.status(401).end();
    }

   



    
}