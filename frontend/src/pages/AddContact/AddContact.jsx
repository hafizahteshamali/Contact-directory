import { useForm } from "react-hook-form";
import { postReq, putReq } from "../../Api/axios";
import { useDispatch, useSelector } from "react-redux";
import { AddAllContact, UpdateAllContact } from "../../Redux/Reducers/ContactReducer";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AddContact = ({isUpdate}) => {

  const dispatch = useDispatch();
  const stateData = useSelector((state)=>state);
  const location = useLocation();
  const {uid, existData} = location.state || {};
  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) => {
    try {
      if(isUpdate){
        const updatedData = await putReq(`contacts/updatecontact/${uid}`, data)
        dispatch(UpdateAllContact(updatedData))
        toast.success("Data updated Successfully");
        reset();
      }else{
        const response = await postReq('contacts/addcontact', data)
        dispatch(AddAllContact(response?.data?.data))
        toast.success("Data Add Successfully");
        reset();
      }
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    if (isUpdate && existData) {
      reset({
        User_Name: existData.User_Name || "",
        phone_Number: existData.phone_Number || "",
        Email_Add: existData.Email_Add || "",
        Date_of_Birth: existData.Date_of_Birth || "",
        Designation: existData.Designation || "",
      });
    }
  }, [isUpdate, existData, reset]);

  return (
    <div className="min-h-[100vh] w-[100%] flex justify-center items-center bg-[#ddd]">
      <div className="w-[500px] bg-white">

        <form className="flex flex-col justify-center gap-2 p-3 w-[90%] m-auto" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl font-extrabold text-center">{isUpdate ? "Update" : "Add"} Contact</h1>
          <label className="text-xl text-[#928a8a]">Username:</label>
          <input className="border-[2px] border-[#ddd] h-[40px] rounded-md text-xl p-5" type="text" placeholder="enter username" {...register("User_Name")} />
          {errors.User_Name && <span>This field is required</span>}

          <label className="text-xl text-[#928a8a]">Phone no:</label>
          <input className="border-[2px] border-[#ddd] h-[40px] rounded-md text-xl p-5" type="number" placeholder="enter phone no." {...register("phone_Number")} />
          {errors.phone_Number && <span>This field is required</span>}

          <label className="text-xl text-[#928a8a]">Email:</label>
          <input className="border-[2px] border-[#ddd] h-[40px] rounded-md text-xl p-5" type="email" placeholder="enter email address" {...register("Email_Add")} />
          {errors.Email_Add && <span>This field is required</span>}

          <label className="text-xl text-[#928a8a]">Date of Birth:</label>
          <input className="border-[2px] border-[#ddd] h-[40px] rounded-md text-xl p-5" type="text" placeholder="enter date of birth" {...register("Date_of_Birth")} />
          {errors.Date_of_Birth && <span>This field is required</span>}
          
          <label className="text-xl text-[#928a8a]">Designation:</label>
          <input className="border-[2px] border-[#ddd] h-[40px] rounded-md text-xl p-5" type="text" placeholder="enter user designation" {...register("Designation")} />
          {errors.Designation && <span>This field is required</span>}
       
          <input className="border-[2px] bg-[#bbb6b6] h-[50px] rounded-md text-xl" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddContact;
