import { useState } from "react";

export default function Form() {
    const [inputs, setInputs] = useState();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={submitHandler} className=" flex flex-col m-auto">
            <label htmlFor="username">Username</label>
            <input
                id="username"
                name="username"
                onChange={inputHandler}
                autoComplete="off"
                className="w-56"
            />

            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                onChange={inputHandler}
                autoComplete="off"
                className="w-56"
            />
        </form>
    )
}