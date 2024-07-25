import { useNavigate, useParams } from "react-router-dom";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateData } from "./redux/slices/userSlice";

function UpdatePage() {
  const { id } = useParams();
  const users = useSelector((state) => state.users.data);
  const editUser = users.filter((user) => user.id == id);
  const { name, email } = editUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateData({ name: uname, email: uemail, id }));
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-slate-300">
      <div className="size-[50%] shadow-2xl bg-white rounded-xl p-8">
        <div className="flex items-center mb-5 ">
          <PencilSquareIcon className="size-8 " />
          <h1 className="text-third text-2xl font-bold">
            &nbsp;Update User ({id})
          </h1>
        </div>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="name"
            className="w-full border border-black rounded-lg py-2 px-4 "
            value={uname}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            className="w-full border border-black rounded-lg py-2 px-4 mt-4"
            value={uemail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className=" py-2 px-4 mt-4 bg-blue-700 hover:bg-blue-600 rounded-lg w-full text-white font-semibold"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
export default UpdatePage;
