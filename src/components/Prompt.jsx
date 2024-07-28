function Prompt() {
    return (
        <>
            <form>
                <label htmlFor="todo">
                    <input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Write your next task"
                    ></input>
                </label>
                <button>
                    <span className="visually-hidden">Submit</span>
                </button>
            </form>
        </>
    )
}

export default Prompt;