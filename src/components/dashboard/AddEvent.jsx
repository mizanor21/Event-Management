import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input, initTWE } from "tw-elements";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadDropzone } from "react-uploader";

const uploader = Uploader({
  apiKey: "public_12a1z1REu3fCw6pTwEPR8ojAM3EN", // This is your API key.
});

// Configuration options: https://www.bytescale.com/docs/upload-widget/frameworks/react#customize
const options = {
  maxFileCount: 1,
  // showFinishButton: true, // Note: You must use 'onUpdate' if you set 'showFinishButton: false' (default).
  styles: {
    colors: {
      primary: "#377dff",
    },
  },
};

const AddEvent = () => {
  const [img, setImg] = useState([]);
  const schema = yup.object().shape({
    title: yup.string().required("Title field is required"),
    price: yup
      .number()
      .typeError("Price must be a number")
      .required("Price field is required"),
    time: yup.string().required("Time field is required"),
    date: yup
      // .date()
      // .typeError("Date must be a valid date")
      .string()
      .required("Date field is required"),
    location: yup.string().required("Location field is required"),
    // image: yup
    //   .string()
    //   .url("Image must be a valid URL")
    //   .required("Image field is required"),
    description: yup
      .string()
      .max(500, "Description cannot exceed 500 characters")
      .required("Description field is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState("");

  useEffect(() => {
    initTWE({ Input });
  }, []);

  const onSubmit = async (data) => {
    const customData = { ...data, image: img.toString() };
    setData(JSON.stringify(customData));
    try {
      const response = await axios.post(
        "https://event-server-7w6i.onrender.com/events",
        customData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        // Data successfully sent
        reset(); // Reset the form values
        toast.success("Event added successfully!");
      } else {
        // Handle errors
        console.error("Failed to send data:", response.statusText);
        toast.error("Failed to add event!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while adding the event!");
    }
  };

  return (
    <div className="p-10 font-serif">
      <h3 className="text-3xl border-l-4 border-orange-400 pl-5 mb-5 uppercase">
        Add New Event
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div>
            <div className="relative" data-twe-input-wrapper-init>
              <input
                {...register("title")}
                type="text"
                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              />
              <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
                Event Title
              </label>
            </div>
            {errors.title && (
              <span className="text-sm text-red-600">
                {errors.title.message}
              </span>
            )}
          </div>
          <div>
            <div className="relative" data-twe-input-wrapper-init>
              <input
                {...register("price")}
                type="text"
                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              />
              <label
                htmlFor="price"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >
                Event Price
              </label>
            </div>
            {errors.price && (
              <span className="text-sm text-red-600">
                {errors.price.message}
              </span>
            )}
          </div>
          <div>
            <div className="relative" data-twe-input-wrapper-init>
              <input
                {...register("time")}
                type="text"
                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              />
              <label
                htmlFor="time"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >
                Event Time
              </label>
            </div>
            {errors.time && (
              <span className="text-sm text-red-600">
                {errors.time.message}
              </span>
            )}
          </div>
          <div>
            <div className="relative" data-twe-input-wrapper-init>
              <input
                {...register("date")}
                type="text"
                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              />
              <label
                htmlFor="date"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >
                Event Date
              </label>
            </div>
            {errors.date && (
              <span className="text-sm text-red-600">
                {errors.date.message}
              </span>
            )}
          </div>
          <div>
            <div className="relative" data-twe-input-wrapper-init>
              <input
                {...register("location")}
                type="text"
                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              />
              <label
                htmlFor="location"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >
                Event Location
              </label>
            </div>
            {errors.location && (
              <span className="text-sm text-red-600">
                {errors.location.message}
              </span>
            )}
          </div>
          {/* <div>
            <div className="relative" data-twe-input-wrapper-init>
              <input
                {...register("image")}
                type="text"
                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              />
              <label
                htmlFor="image"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >
                Event Image URL
              </label>
            </div>
            {errors.image && (
              <span className="text-sm text-red-600">
                {errors.image.message}
              </span>
            )}
          </div> */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="relative" data-twe-input-wrapper-init>
              <textarea
                {...register("description")}
                className="peer block min-h-[150px] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              />
              <label
                htmlFor="description"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >
                Event Description
              </label>
            </div>
            {errors.description && (
              <span className="text-sm text-red-600">
                {errors.description.message}
              </span>
            )}
          </div>
        </div>
        <UploadDropzone
          uploader={uploader}
          options={options}
          onUpdate={(files) => setImg(files.map((x) => x.fileUrl).join("\n"))}
        >
          {({ onClick }) => <button onClick={onClick}>Upload a file...</button>}
        </UploadDropzone>
        <button
          type="submit"
          className="mt-5 bg-orange-400 text-white py-2 px-4 rounded"
        >
          Add Event
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddEvent;
