import { types } from '../types';

export function topicToggle(value) {
    return {
        type: types.TOPIC_TOGGLE,
        payload: value
    }
}

export function calAmpToggle(value) {
    return {
        type: types.CALAMP_TOGGLE,
        payload: value
    }
}

export function genxToggle(value) {
    return {
        type: types.GENX_TOGGLE,
        payload: value
    }
}

export function xirgoToggle(value) {
    return {
        type: types.XIRGO_TOGGLE,
        payload: value
    }
}