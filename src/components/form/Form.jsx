import css from "./form.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "../../redux/Contact/slise"; // Припущено, що ви маєте вже налаштований slice для контактів

export const FormBook = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const newContact = { id: nanoid(), name, number };

    
    dispatch(addContact(newContact));

    
    setName("");
    setNumber("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        <span className={css.span}>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={css.input}
        />
      </label>
      <label className={css.label}>
        <span className={css.span}>Number</span>
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          className={css.input}
        />
      </label>
      <button type="submit" className={css.button}>
        Submit
      </button>
    </form>
  );
};
