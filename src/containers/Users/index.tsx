"use client";
import { useQuery } from "react-query";
import getUsers from "./getUsers";
import { Loader } from "../../components/Loader";

export default function showUsers() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getUsers(),
    queryKey: ["users"], //Array according to Documentation
  });

  console.log(isError, "error")


  if (isLoading) {
    return  <Loader />
  };


  if (isError) return <div>Sorry There was an Error</div>;

  return (
    <div className="container mx-auto">
      <h1 className="p-5 box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-center font-bold text-4xl">
        React Query Users
      </h1>
      <div className="grid grid-cols-4 gap-4 p-10">
          {data?.map(
            (item: { _id: number, username: string; email: string }) => {
              return (
                <div key={item._id}>
                  <h1>Email: {item.email}</h1>
                  <ul>
                    <li>Username: {item.username}</li>
                    <li>ID: {item._id}</li>
                  </ul>

                </div>




              );
            }
          )}
      </div>
    </div>
  );
}