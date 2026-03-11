import useFormInput from "../hooks/useFormInput";

export default function Form() {
  const firstNameProps = useFormInput("Sakib");
  const lastNameProps = useFormInput("Manna");

  return (
    <>
      <label>
        First name:
        <input
          value={firstNameProps.value}
          onChange={firstNameProps.onChange}
        />
      </label>
      <br />
      <label>
        Last name:
        <input value={lastNameProps.value} onChange={lastNameProps.onChange} />
      </label>
      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
}
