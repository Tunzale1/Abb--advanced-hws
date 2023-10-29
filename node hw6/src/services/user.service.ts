import { User } from "../models/User.entity";
import { AppDataSource } from "../app-data-source";
import { UserDto } from "../dto/user.dto";
import { comparePassword, hashPassword } from "../utils/hash";
import { emailValidation } from "../utils/validation";

const repository = AppDataSource.getRepository(User);

export async function findUser({ email, password }: UserDto) {
    const user = await repository.findOne({ where: { email } });
    if (!user) return null;

    const state = await comparePassword(password, user.password);
    if (state) return user;
    return null;
}

export async function createUser({ email, password }: UserDto) {
    const result = emailValidation(email);

    if (!result) throw new Error("Email confirmation is unsuccesfull!");

    return repository.save({ email, password: await hashPassword(password) });
}
