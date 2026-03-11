import useFormInput from "../hooks/useFormInput";

export default function Form() {
  const firstNameProps = useFormInput("Sakib");
  const lastNameProps = useFormInput("Manna");

  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <br />
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
}
