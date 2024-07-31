import { useState } from "react";
function ProgressBar({ completedTask, totalTask }) {
    const [progress] = useState(0);
    return (
        <>
            <section className="progress-bar-section">
                <div className="taskDoneWord">
                    <p>Task Done</p>
                </div>
                <div className="container">
                    <div className="taskDoneBar" style={{ width: `${progress}%` }} >
                        {progress}%
                    </div>
                </div>
            </section>
        </>
    );
}
export default ProgressBar;