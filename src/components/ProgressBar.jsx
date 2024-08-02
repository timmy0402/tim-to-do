import { useState } from "react";
function ProgressBar({ completedTask, totalTask }) {
    return (
        <>
            <section className="progress-bar-section">
                <div className="taskDoneWord">
                    <p>Task Done</p>
                </div>
                <div className="container">
                    <div className="taskDoneBar" style={completedTask > 0 ? { width: `${completedTask / totalTask * 100}%` } : { width: 10 }} >
                        {completedTask / totalTask * 100}%
                    </div>
                </div>
            </section>
        </>
    );
}
export default ProgressBar;