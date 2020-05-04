import React from 'react';

function MathAdvanced(props) {
    const milestoneId = "Advanced Course Completed";

    function handleMilestone() {
        props.onMilestoneReached && props.onMilestoneReached(milestoneId);
    }

    return (
        <div>
            <p>This is an advanced math course </p>
            <div>
                <button onClick={ handleMilestone }>
                    Invoke on Parent
                </button>
            </div>
        </div>
    );
}

export default MathAdvanced;