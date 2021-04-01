export default (state, action) => {
    console.log('action.type', state)
    switch (action.type) {
        case 'INCREASE':
            switch (state.activeSession) {
                case 'SECONDS':
                    const newState = state;
                    newState.seconds = newState.seconds + 1;
                    if (newState.seconds === 60) {
                        newState.seconds = 0;
                        newState.minutes = newState.minutes + 1;
                        // newState.activeSession = "MINUTES"
                        if (newState.minutes === 60) {
                            newState.minutes = 0;
                            newState.hours = newState.hours + 1;
                            // newState.activeSession = "HOURS"
                            if (newState.hours === 24) {
                                newState.hours = 0;
                                newState.days = newState.days + 1;
                                // newState.activeSession = "DAYS"
                            }
                        }
                    }
                    return state;
                    break;

                default:
                    break;
            }
        case 'DECREASE':
            switch (state.activeSession) {
                case 'SECONDS':
                    const newState = state;
                    newState.seconds = newState.seconds - 1;
                    if (newState.seconds < 0) {
                        newState.seconds = 59;
                        newState.minutes = newState.minutes - 1;
                        if (newState.minutes < 0) {
                            newState.minutes = 59;
                            newState.hours = newState.hours - 1;
                            if (newState.hours < 0) {
                                newState.hours = 23;
                                newState.days = newState.days - 1;
                            }
                        }
                    }
                    break;

                default:
                    break;
            }

        default:
            return state;
    }
}