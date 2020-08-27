import { types } from '../types'
const INITIAL_STATE = {
    topic: '',
    calamp: '',
    genx: '',
    xirgo: ''
};

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case (types.TOPIC_TOGGLE): {
            return {
                ...state,
                topic: payload
            }
        }

        case (types.CALAMP_TOGGLE): {
            return {
                ...state,
                calamp: payload
            }
        }

        case (types.GENX_TOGGLE): {
            return {
                ...state,
                genx: payload
            }
        }

        case (types.XIRGO_TOGGLE): {
            return {
                ...state,
                xirgo: payload
            }
        }

        default: return state
    }
};