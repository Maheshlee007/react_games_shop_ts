import { FieldValues, useForm } from "react-hook-form";

const ReactHookForms = () => {
  const { register, handleSubmit } = useForm();
  const postData = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(postData)}>
      <strong>ReactHookForms</strong>
      <div className="form-group m-2 w-75">
        <label htmlFor="name" className="form-label">
          email
        </label>
        <input
          {...register("email")}
          id="name"
          type="email"
          className="form-control"
        />
        <button type="submit" className="btn btn-primary">
          send email
        </button>
      </div>
    </form>
  );
};

export default ReactHookForms;
