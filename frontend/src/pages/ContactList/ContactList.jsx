import { useDispatch, useSelector } from "react-redux";
import { deleteReq, getReq } from "../../Api/axios";
import { useEffect } from "react";
import {
  DeleteAllContact,
  GetAllContact,
} from "../../Redux/Reducers/ContactReducer";
import { MdAutoDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ContactList = () => {
  const dispatch = useDispatch();
  const useData = useSelector((state) => state?.contact?.contact);
  const navigate = useNavigate();

  const GetData = async () => {
    try {
      const response = await getReq("contacts");
      const actutalData = response?.data?.data;
      dispatch(GetAllContact(actutalData));
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteAllData = async (id) => {
    try {
      const response = await deleteReq(`contacts/deletecontact/${id}`);
      dispatch(DeleteAllContact(response?.data?.data));
      toast.success("Deleted Data Successfully...");
      GetData();
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="text-2xl">
      <h1 className="text-center text-4xl font-extrabold">All Contacts</h1>
      <div className="min-h-[500px] bg-[#b6b1b1] rounded-xl mt-4 w-[800px] m-auto p-4">
        {useData.length === 0 ? (
          <div className="text-center">Contacts Data not Found...!</div>
        ) : (
          useData?.map((item, index) => {
            return (
              <div className="w-[80%] p-3 m-auto flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <img src="./assets/images/user.png" alt="" />
                  <div>
                    <p className="text-[20px]">{item.User_Name}</p>
                    <p className="text-[16px]">{item.Designation}</p>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-4">
                  <a
                    onClick={() => DeleteAllData(item._id)}
                    className="h-[40px] w-[40px] rounded-md flex justify-center items-center bg-white"
                    href="javascript:;"
                  >
                    <MdAutoDelete />
                  </a>
                  <a onClick={()=>navigate('/updateuser', {state: {uid: item._id, existData: item}})}
                    className="h-[40px] w-[40px] rounded-md flex justify-center items-center bg-white"
                    href="javascript:;"
                  >
                    <FaRegEdit />
                  </a>
                  <a
                    className="h-[40px] w-[40px] rounded-md flex justify-center items-center bg-white"
                    href="javascript:;"
                  >
                    <HiDotsHorizontal />
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ContactList;
