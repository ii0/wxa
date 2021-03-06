import {isNullOrUndefined} from "../utils";

const validate = (value) => {
    if (isNullOrUndefined(value)) {
        value = '';
    }
    if (Array.isArray(value)) {
        return value.every(val => /(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val));
    }
    return /(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value);

};

export {
    validate
};

export default {
    validate
};
