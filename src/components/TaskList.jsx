function Task({ item }) {
    return (
        <>
            <li id={item?.id} className="task">
                <button className="leftSide">
                    <span>
                        <p style={item.isCompleted ? { textDecoration: "line-through" } : {}}>
                            {item?.title}
                        </p>
                    </span>
                </button>
                <button>
                    <span className="rightSide">Edit</span>
                </button>
                <button>
                    <span className="rightSide">Delete</span>
                </button>
            </li>
        </>
    );
}

function TaskList({ tasks }) {
    return (
        <>
            <ul className="todo_list">
                {tasks && tasks.length > 0 ? (
                    tasks?.map((item, index) => <Task key={index} item={item} />)
                ) : (
                    <p>Nothing to do, need to add something</p>
                )}
            </ul>
        </>
    );
}
export default TaskList;
