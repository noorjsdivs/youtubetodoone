import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import TodoList from "./TodoList";
import ErrMsg from "./Msg/ErrMsg";
import SuccessMsg from "./Msg/SuccessMsg";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../reduxStore/todoSlice";

const InputForm = () => {
  const dispatch = useDispatch();
  const todosItem = useSelector((state) => state.todos.todosList);
  const [todoValue, setTodoValue] = useState("");
  const [category, setCategory] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [shwoErr, setShowErr] = useState(false);
  const [shwoSuccess, setShowSuccess] = useState(false);
  const options = [
    {
      _id: 1000,
      title: "categories",
    },
    {
      _id: 1001,
      title: "personal",
    },
    {
      _id: 1002,
      title: "business",
    },
    {
      _id: 1003,
      title: "others",
    },
  ];
  const handleTodo = (e) => {
    e.preventDefault();
    if (todoValue === "") {
      setErrMsg("Please write your todo!");
      setShowErr(true);
    } else if (category === "") {
      setErrMsg("Select a category!");
      setShowSuccess(false);
      setShowErr(true);
    } else {
      dispatch(
        addTodos({
          _id: todoValue,
          todo: todoValue,
          category: category,
        })
      );
      setTodoValue("");
      setSuccessMsg("Todo added Successfully!");
      setShowSuccess(true);
      setShowErr(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setShowErr(false);
    }, 4000);

    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  }, [errMsg, successMsg]);
  return (
    <div className="w-full bg-bodyColor flex flex-col gap-4">
      <div className="flex gap-4 w-full h-12">
        <input
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
          className="w-[80%] h-full bg-bodyColor border-[1px] border-gray-400 py-2 px-4 placeholder:text-gray-400 text-white text-base placeholder:text-sm tracking-wide rounded-md outline-none focus-visible:border-orange-600 hover:border-white"
          type="text"
          placeholder="Enter your Todo..."
        />
        <div className="w-[20%] h-full relative">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full h-full text-center capitalize outline-none bg-bodyColor border-[1px] border-gray-400 px-1 cursor-pointer appearance-none rounded-md focus-visible:border-orange-600 hover:border-white"
          >
            {options.map((item) => (
              <option key={item._id}>{item.title}</option>
            ))}
          </select>
          <span className="absolute right-3 top-4">
            <FaChevronDown />
          </span>
        </div>
      </div>
      <button
        onClick={handleTodo}
        className="w-full border-[1px] border-gray-400 hover:border-gray-200 duration-300 font-titleFont font-semibold tracking-wider text-gray-300 hover:text-orange-600 h-10 uppercase rounded-md"
      >
        Add Todo
      </button>
      {/* ========================= Todo list start here =========================== */}

      <div>
        <ul className="grid grid-cols-1 gap-4 border border-gray-600 shadow-todoShodow mt-6 p-4">
          {todosItem.length > 0 ? (
            <>
              {" "}
              {todosItem.map((item) => (
                <TodoList key={item._id} todo={item.todo} />
              ))}
            </>
          ) : (
            <p className="text-center text-base text-yellow-500 font-titleFont font-medium tracking-wide">
              Your todo list is Empty!
            </p>
          )}
        </ul>
      </div>
      {/* ========================= Todo list end here ============================== */}

      {/* ========================= Error Message start here ======================== */}
      {shwoErr && <ErrMsg errMsg={errMsg} />}
      {/* ========================= Error Message end here ========================== */}
      {/* ========================= Success Message start here ====================== */}
      {shwoSuccess && <SuccessMsg successMsg={successMsg} />}
      {/* ========================= Success Message end here ======================== */}
    </div>
  );
};

export default InputForm;