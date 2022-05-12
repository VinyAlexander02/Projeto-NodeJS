import express, {Request, Response, NextFunction } from "express";
import "reflect-metadata";
import 'express-async-errors'

import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

// htt://localhost:3000
app.listen(3000, () => console.log("Servidor está rodando"));

/*

   GET    => Buscar Informção 
   POST   => Inserir ou criar uma Informação.
   PUT    => Alterar uma informação (Alterção de Dados existentes).
   DELETE => Remover uma informação.
   PATCH  => Alterar informação especifica.

*/

/* Tipos de Parâmetros 
  ROUTE PARAMS -> Fazem parte das nossas rotas(Possui o nome do parametro, id/{id})
  http://localhost:3000/produto/25485615195816513

  QUERY PARAMS ->  Utiliza-se quando queremos fazer um filto(Quando queremos buscar determinhado produto)
   http://localhost:3000/produto?name=teclado&description

  BODY PARAMS -> Parametros que vem no corpo da requisição{
      "nome": "teclado"
      "description": "teclado bom"
  }


app.get("/test", (request, reponse) => {
  // Request => tudo aquilo que está entrando
  // Respose => Tudo aquilo que está saindo
  return reponse.send("Olá NLW");
});

app.post("/test-post", (request, reponse) => {
  return reponse.send("Olá NLW teste Post");
});
*/
