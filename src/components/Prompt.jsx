function Prompt({ setTodos }) {
    const submitForm = (event) => {
        event.preventDefault();
        const value = event.target.todo.value;
        setTodos((prevTodos) => [
            prevTodos,
            { title: value, id: self.crypto.randomUUID(), isCompleted: false },
        ]);
        //reset the form
        event.target.reset();
    };
    return (
        <>
            <form className="form" onSubmit={submitForm}>
                <label htmlFor="todo" >
                    <input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Write your next task"
                    />
                </label>
                <button>
                    <span className="visually-hidden">Submit</span>
                </button>
            </form>
        </>
    );
}

export default Prompt;