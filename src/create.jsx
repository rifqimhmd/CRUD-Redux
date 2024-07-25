import { UserPlusIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "./redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

function CreatePage() {
  const ref = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData({ name, email, id: users[users.length - 1].id + 1 }));
    navigate("/");
  };

  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-slate-300">
      <div className="size-[50%] shadow-2xl bg-white rounded-xl p-8">
        <div className="flex items-center mb-5 ">
          <UserPlusIcon className="size-7 " />
          <h1 className="text-third text-2xl font-bold">&nbsp;Add User</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="w-full border border-black rounded-lg py-2 px-4 "
            placeholder="Add Your Name"
            required
            ref={ref}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            className="w-full border border-black rounded-lg py-2 px-4 mt-4"
            placeholder="Add Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className=" py-2 px-4 mt-4 bg-blue-700 hover:bg-blue-600 rounded-lg w-full text-white font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default CreatePage;
