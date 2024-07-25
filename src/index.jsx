import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/solid";
import { deleteData } from "./redux/slices/userSlice";
import { useDispatch } from "react-redux";

function HomePage() {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };
  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-slate-300">
      <div className="shadow-2xl bg-white rounded-xl p-8">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-third text-2xl font-bold">CRUD Redux</h1>
          <Link
            to="/create"
            className="bg-blue-600 py-2 px-4 rounded-full font-semibold text-sm text-white hover:bg-blue-700"
          >
            + Add Users
          </Link>
        </div>
        <div className="border rounded-md overflow-hidden ">
          <table className="table-auto  w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className="border-b text-center" key={user.id}>
                  <td className="px-4 py-2">{user.id}</td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="py-2 flex justify-center gap-2 items-center ">
                    <Link to={`/update/${user.id}`}>
                      <PencilIcon className="size-5 text-blue-600" />
                    </Link>
                    <button onClick={() => handleDelete(user.id)}>
                      <TrashIcon className="size-5 text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
