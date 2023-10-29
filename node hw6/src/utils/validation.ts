import { emailValid } from "../validation/email_valid";

export const emailValidation = (email: string) => {
    return email && email.match(emailValid);
};
