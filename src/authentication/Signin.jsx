import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "./placeholder.css"; // Make sure to import your CSS file

const schema = yup.object().shape({
  name: yup.string().min(5).max(25).required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(5)
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,15}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal font-serif" role="dialog">
        <div className="modal-box rounded-none max-w-[400px]">
          <div className="flex flex-col items-center">
            <img src="" alt="Event logo" />
            <h3 className="text-xl font-serif">Sign up for Events</h3>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 mt-5"
          >
            <div className="input-container">
              <input
                {...register("name")}
                type="text"
                placeholder=" "
                className="input input-bordered"
              />
              <label>Full Name</label>
            </div>
            {errors.name && (
              <small className="text-red-600">{errors.name?.message}</small>
            )}

            <div className="input-container">
              <input
                {...register("email")}
                type="email"
                placeholder=" "
                className="input input-bordered"
              />
              <label>Email</label>
            </div>
            {errors.email && (
              <small className="text-red-600">{errors.email?.message}</small>
            )}

            <div className="input-container">
              <input
                {...register("password")}
                type="password"
                placeholder=" "
                className="input input-bordered"
              />
              <label>Password</label>
            </div>
            {errors.password && (
              <small className="text-red-600">{errors.password?.message}</small>
            )}

            <div className="input-container">
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder=" "
                className="input input-bordered"
              />
              <label>Confirm Password</label>
            </div>
            {errors.confirmPassword && (
              <small className="text-red-600">
                {errors.confirmPassword?.message}
              </small>
            )}

            <br />
            <input className="btn" type="submit" value="Sign up" />
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default Signin;
