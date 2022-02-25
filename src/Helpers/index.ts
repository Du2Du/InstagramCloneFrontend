import toast from "react-hot-toast";

export const showError = (errors: any) => {
  if (errors?.isCanceled || !errors) return;
  console.log(errors.response);

  if (errors.response?.data?.message) {
    toast.error(errors.response?.data?.message);
    return;
  }
  const { data } = errors?.response;
  if (errors.response?.status === 422) {
    Object.entries(data.errors).forEach(
      (errorArrayValue: any, index: number) => {
        errorArrayValue[1].forEach((error: any, idx: number) => {
          toast.error(error);
        });
      }
    );
  } else toast.error("Unable to perform desired action at this time!");
};
