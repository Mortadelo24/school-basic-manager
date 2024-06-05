import { validate } from "email-validator"

const checkEmail = (email: string): boolean=> validate(email);

export default checkEmail