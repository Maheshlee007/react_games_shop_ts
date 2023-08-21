import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//zod schema declaration
const schema = z.object({ email: z.string().email() });
type FormData = z.infer<typeof schema>;

//component
const ReactHookForms = () => {
  //react hook form destrcuturing
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  console.log(errors);

  const postData = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(postData)}>
      <strong>ReactHookForms with zod schema</strong>
      <div className="form-group m-2 w-75">
        <label htmlFor="name" className="form-label">
          email
        </label>
        <input
          // {...register("email", { required: true, minLength: 10 })}
          id="name"
          type="email"
          className="form-control"
        />
        <button type="submit" className="btn btn-primary">
          send email
        </button>
      </div>
      {/* {errors.email?.type === "required" && (
        <p className="text-danger">* mail is required</p>
      )} */}
      {errors.email && <p className="text-danger">* {errors.email.message}</p>}
    </form>
  );
};

export default ReactHookForms;
