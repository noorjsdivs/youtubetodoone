import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import TodoList from "../TodoList";

const Category = () => {
  const todosItem = useSelector((state) => state.todos.todosList);
  const [personalTodos, setPersonalTodos] = useState([]);
  const [businessTodos, setBusinessTodos] = useState([]);
  const [othersTodos, setOthersTodos] = useState([]);

  //   ========================= button click event start here ======================
  const [activePersonal, setActivePersonal] = useState(false);
  const [activebusiness, setActiveBusiness] = useState(false);
  const [activeothers, setActiveOthers] = useState(false);
  //   ========================= button click event end here ========================

  useEffect(() => {
    const personalCategories = todosItem.filter(
      (item) => item.category === "personal"
    );
    setPersonalTodos(personalCategories);

    const businessCategories = todosItem.filter(
      (item) => item.category === "business"
    );
    setBusinessTodos(businessCategories);
    const othersCategories = todosItem.filter(
      (item) => item.category === "others"
    );
    setOthersTodos(othersCategories);
  }, [todosItem]);

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[350px] md:w-[680px] mdl:w-[730px] lgl:w-[850px] md:h-[150px] bg-bodyColor flex flex-col md:flex-row"
    >
      <div className="w-full md:w-[16%] h-full flex flex-col justify-between">
        <button
          onClick={() =>
            setActivePersonal(true) &
            setActiveBusiness(false) &
            setActiveOthers(false)
          }
          className="h-full md:h-1/3 border-[1px] border-gray-500 border-b-0 text-gray-300 hover:text-white duration-300"
        >
          Personal
        </button>
        <button
          onClick={() =>
            setActivePersonal(false) &
            setActiveBusiness(true) &
            setActiveOthers(false)
          }
          className="h-full md:h-1/3 border-[1px] border-gray-500 border-b-0 text-gray-300 hover:text-white duration-300"
        >
          Business
        </button>
        <button
          onClick={() =>
            setActivePersonal(false) &
            setActiveBusiness(false) &
            setActiveOthers(true)
          }
          className="h-full md:h-1/3 border-[1px] border-gray-500 text-gray-300 hover:text-white duration-300"
        >
          Others
        </button>
      </div>
      <div className="w-full md:w-[80%] h-full flex items-center overflow-y-scroll scrollbar-hide">
        <p
          className={`${
            activePersonal || activebusiness || activeothers
              ? "hidden"
              : "w-full text-center text-base font-titleFont font-semibold tracking-wider text-green-500"
          } `}
        >
          Click on the tab to choose your todos category
        </p>
        {activePersonal && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {personalTodos.length > 0 ? (
              <>
                {personalTodos.map((item) => (
                  <TodoList key={item._id} todo={item.todo} _id={item._id} />
                ))}
              </>
            ) : (
              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold"
              >
                Personal todo list is Empty!
              </motion.li>
            )}
          </ul>
        )}
        {activebusiness && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {businessTodos.length > 0 ? (
              <>
                {businessTodos.map((item) => (
                  <TodoList key={item._id} todo={item.todo} _id={item._id} />
                ))}
              </>
            ) : (
              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold"
              >
                Business todo list is Empty!
              </motion.li>
            )}
          </ul>
        )}
        {activeothers && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {othersTodos.length > 0 ? (
              <>
                {othersTodos.map((item) => (
                  <TodoList key={item._id} todo={item.todo} _id={item._id} />
                ))}
              </>
            ) : (
              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold"
              >
                Others todo list is Empty!
              </motion.li>
            )}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default Category;
