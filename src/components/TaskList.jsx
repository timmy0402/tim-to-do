function Task({ item }) {
    return (
        <>
            <li id={item?.id} className="task">
                <button className="leftSide">
                    <svg>
                        <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
                    </svg>
                    <p>{item?.title}</p>
                </button>
                <div className="rightSide">
                    <button>
                        <span className="visually-hidden">Edit</span>
                        <svg>
                            <path d="" />
                        </svg>
                    </button>
                    <button>
                        <span className="visually-hidden">Delete</span>
                        <svg>
                            <path d="" />
                        </svg>
                    </button>
                </div>
            </li>
        </>
    );
}

function TaskList({ tasks }) {
    return (
        <>
            <ol className="todo_list">
                {tasks && tasks.length > 0 ? (
                    tasks?.map((item, index) => <Task key={index} item={item} />)
                ) : (
                    <p>Nothing to do, need to add something</p>
                )}
            </ol>
        </>
    );
}
export default TaskList;
