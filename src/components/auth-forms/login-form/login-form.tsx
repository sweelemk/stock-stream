import { useNavigate } from "react-router-dom";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Logo, Input, Typography } from "shared/ui";
import { useAppDispatch } from "store/hooks";
import { schema, FormData } from "./login-form-validations";
import { authLogin } from "components/auth-provider/model";
import { getUser } from "store/models";

const { Link, Heading, Text } = Typography;

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    const user = {
      email: formData.email,
      password: formData.password!,
    };

    dispatch(authLogin(user))
      .unwrap()
      .then((response) => {
        response && dispatch(getUser(response.id)).unwrap().finally(() => {
          navigate('/');
        })
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="flex flex-col px-6 py-10 bg-white rounded-lg w-full max-w-sm shadow mx-auto items-center">
        <Logo className="w-12 text-primary" />
        <Heading size={6} className="mt-10">
          Sign in to your account
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
            Not a member?&nbsp;
            <Link to="/register">Create an account</Link>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
