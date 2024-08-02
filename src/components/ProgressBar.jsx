import { useState } from "react";
function ProgressBar({ completedTask, totalTask }) {
    const [progress] = useState(completedTask / totalTask);
    return (
        <>
            <section className="progress-bar-section">
                <div className="taskDoneWord">
                    <p>Task Done</p>
                </div>
                <div className="container">
                    <div className="taskDoneBar" style={completedTask > 0 ? { width: `${progress}%` } : { width: 10 }} >
                        {progress}%
                    </div>
                </div>
            </section>
        </>
    );
}
export default ProgressBar;