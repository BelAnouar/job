import NearMeIcon from "@mui/icons-material/NearMe";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useQuery, useQueryClient } from "react-query";
import { deleteJob, getJob, getJobs } from "../../../lib/helper";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import moment from "moment/moment";
import { useDispatch } from "react-redux";
import { UpdateAction, UpdateJob } from "../../../redux/reducer";
export default function CardJob() {
  const { isLoading, isError, data, error } = useQuery("job", getJobs);
  if (isLoading) return (<><div>data is Loading</div></>);
  if (isError) return <div>Got Error{error}</div>;
  console.log(data);
  if (Object.keys(data).length === 0) return <div>data is Empty</div>;
  const queryClient = useQueryClient();
  const handleDelete = async (id) => {
    await deleteJob(id);
    await queryClient.prefetchQuery("job", getJobs);
  };
  const dispatch = useDispatch();

  return (
    <div className="grid lg:grid-cols-2 gap-2">
      {data.map((Objitem,index) => {
        return (
          <div key={index} className="group mx-2 mt-10 grid max-w-xl grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
            <div className="grid h-16 w-16 ml-4 rounded-lg bg-purple-600 text-white place-items-center uppercase text-2xl font-bold ">
              {Objitem.company?.charAt(0)}
            </div>

            <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
              <h3 className="text-sm text-gray-600">{Objitem.position}</h3>
              <a
                href="#"
                className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
              >
                {" "}
                {Objitem.company}{" "}
              </a>
              <div className=" items-center gap-3 grid grid-cols-2  mt-2">
                <span className="bg-purple-100 text-purple-700 rounded-full w-3/5 px-4 py-1 text-sm">
                  <NearMeIcon fontSize="small" /> {Objitem.location}
                </span>
                <span className="bg-orange-100 text-orange-700 rounded-full w-4/5 px-4 py-1 text-sm">
                  <DateRangeIcon fontSize="small" />{" "}
                  {moment(Objitem.data).format("MMM Do, YYYY")}
                </span>
              </div>

              <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                <div className="">
                  Status Job:
                  <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900 capitalize">
                    {" "}
                    {Objitem.status}{" "}
                  </span>
                </div>
                <div className="">
                  Type Job:
                  <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900 capitalize">
                    {Objitem.type}
                  </span>
                </div>
              </div>
              <div className="mt-3 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                <button onClick={()=>dispatch(UpdateAction(Objitem._id))} className="bg-transparent hover:bg-green-700 text-green-700 font-semibold hover:text-black py-2 px-3 border border-green-500 hover:border-transparent rounded">
                  <AutoFixHighIcon fontSize="small" /> Edit
                </button>
                <button
                  onClick={async () => { await handleDelete(Objitem._id)}}
                  className="bg-transparent hover:bg-rose-500 text-rose-700 font-semibold hover:text-black py-2 px-3 border border-rose-500 hover:border-transparent rounded"
                >
                  <DeleteForeverIcon fontSize="small" /> Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
