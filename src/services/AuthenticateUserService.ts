import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UserRepositories } from "../repositories/UserRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}
class AuthenticatUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepositories = getCustomRepository(UserRepositories);

    // Verificar se o email Existente
    const user = await userRepositories.findOne({
      email,
    });

    if (!user) {
      throw new Error("Email/PassWord incorret");
    }

    // Verificar de a senha está correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/PassWord incorret");
    }
    //Gerar token
    const token = sign({
      email: user.email,
    }, "faf2d565aa2365c9bb6bb330d0504ee2", {
        subject: user.id,
        expiresIn: "1d"
    }
    );
    return token;
  }
}

export { AuthenticatUserService };
