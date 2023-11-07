import { useNavigate } from "react-router-dom";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authRegister } from "components/auth-provider/model";
import { Button, Logo, Input, Typography } from "shared/ui";
import { useAppDispatch } from "store/hooks";
import { getUser } from "store/models";
import { schema, FormData } from "./register-form-validations";

const { Link, Heading, Text } = Typography;

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    const user = {
      email: formData.email,
      password: formData.password!,
      options: {
        data: {
          full_name: `${formData.firstName} ${formData.lastName}`
        }
      }
    };
    
    dispatch(authRegister(user))
      .unwrap()
      .then((response) => {
        if (response) {
          dispatch(getUser(response.id))
            .unwrap()
            .finally(() => {
              navigate("/");
            });
        } else {
          throw new Error("Something went wrong. Please, try again");
        }
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {});
  };
  console.log(isSubmitting);

  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="flex flex-col px-6 py-10 bg-white rounded-lg w-full max-w-md shadow mx-auto items-center">
        <Logo className="w-12" />
        <Heading size={6} className="mt-10">
          Create your account
        </Heading>
        <div className="w-full mt-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Text
                as="label"
                size={2}
                weight="normal"
                className="leading-6 text-slate-500"
              >
                First name
              </Text>
              <div className="mt-2">
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      className={`${
                        errors["email"] &&
                        "border-red-600 text-red-600 focus-visible:ring-red-600"
                      }`}
                    />
                  )}
                />
              </div>
            </div>
            <div>
              <Text
                as="label"
                size={2}
                weight="normal"
                className="leading-6 text-slate-500"
              >
                Last name
              </Text>
              <div className="mt-2">
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      className={`${
                        errors["email"] &&
                        "border-red-600 text-red-600 focus-visible:ring-red-600"
                      }`}
                    />
                  )}
                />
              </div>
            </div>
            <div>
              <Text
                as="label"
                size={2}
                weight="normal"
                className="leading-6 text-slate-500"
              >
                Email address
              </Text>
              <div className="mt-2">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      className={`${
                        errors["email"] &&
                        "border-red-600 text-red-600 focus-visible:ring-red-600"
                      }`}
                    />
                  )}
                />
              </div>
            </div>
            <div>
              <Text
                as="label"
                size={2}
                weight="normal"
                className="leading-6 text-slate-500"
              >
                Password
              </Text>
              <div className="mt-2">
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="password"
                      className={`${
                        errors["password"] &&
                        "border-red-600 text-red-600 focus-visible:ring-red-600"
                      }`}
                    />
                  )}
                />
              </div>
            </div>
            <div>
              <Button
                type="submit"
                size="sm"
                className="w-full"
                disabled={isSubmitting}
              >
                Sign in
              </Button>
            </div>
          </form>
          <Text size={2} className="flex mt-10 justify-center">
            Already have an account?&nbsp;
            <Link to="/login">Login</Link>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
