import { authRegister } from "components/auth-provider/model";
import { useNavigate } from "react-router-dom";
import { Button } from "shared/ui";
import { useAppDispatch } from "store/hooks";
import { getUser } from "store/models";

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    const user = {
      email: "sweelemk@gmail.com",
      password: "123456",
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
        console.error(error.message);
      })
      .finally(() => {});
  };
  return (
    <div>
      <Button onClick={handleClick}>Sign up</Button>
    </div>
  );
};

export default SignIn;
