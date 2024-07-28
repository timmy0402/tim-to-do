function ProgressBar({ completedTask, totalTask }) {
    return (
        <>
            <section>
                <div>
                    <p>Finished Task</p>
                </div>
                <div>
                    {completedTask}/{totalTask}
                </div>
            </section>
        </>
    );
}
export default ProgressBar;