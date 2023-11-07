import * as yup from "yup";

export const schema = yup.object({
  firstName: yup.string().min(2),
  lastName: yup.string().min(2),
  email: yup.string().email().required(),
  password: yup.string().min(1)
}).required();

export type FormData = yup.InferType<typeof schema>;