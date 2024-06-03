import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().min(5).max(25).required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(5)
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,15}$/,
      "minimum one uppercase, lowercase & number"
    )
    .required(),
});

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Full Name"
                className="input input-bordered"
              />
            </div>
            {errors.name && (
              <small className="text-red-600">{errors.name?.message}</small>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                type="Email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            {errors.email && (
              <small className="text-red-600">{errors.email?.message}</small>
            )}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="input input-bordered"
              />
            </div>
            {errors.password && (
              <small className="text-red-600">{errors.password?.message}</small>
            )}

            <br />
            <input className="btn" type="submit" />
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
