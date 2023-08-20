import { useRef, FormEvent } from "react";


export const BasicForm = () => {
  // const [name, setname] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const person: any = { name: "" };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    person.name = nameRef?.current?.value;
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group m-2 w-75">
        <label htmlFor="name" className="form-label"></label>
        <input
          ref={nameRef}
          id="name"
          type="text"
          name="name"
          className="form-item"
        />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
};
