"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const CheckBoxHandler = () => {
    const [checkedList, setCheckedList] = (0, react_1.useState)([]);
    const handleCheckSelect = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;
        if (isChecked) {
            setCheckedList([...checkedList, value]);
        }
        else {
            const filterList = checkedList.filter((data) => data !== value);
            setCheckedList(filterList);
        }
    };
    return { checkedList, handleCheckSelect };
};
exports.default = CheckBoxHandler;
