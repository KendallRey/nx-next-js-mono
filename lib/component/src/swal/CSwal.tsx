import Swal, { SweetAlertIcon, SweetAlertOptions } from "sweetalert2";

export const CSwal = async (props: SweetAlertOptions) => {
  const { showCancelButton, showConfirmButton, reverseButtons, confirmButtonText, showCloseButton, ...cleanProps } =
    props;

  const swal = await Swal.fire({
    title: "Confirmation Needed",
    showCancelButton: showCancelButton || true,
    showConfirmButton: showConfirmButton || true,
    reverseButtons: reverseButtons || true,
    confirmButtonText: confirmButtonText || "Save",
    showCloseButton: true,
    focusConfirm: false,
    ...cleanProps,
  });

  return swal;
};

type IHtmlAskActionType = "Delete" | "Update" | "Save" | "Hide" | "Unhide" | "Add";

type IHtmlAskAction = {
  name?: string | null;
  type?: IHtmlAskActionType;
};

export const htmlAskAction = (props: IHtmlAskAction) => {
  const { type, name } = props;
  return `${type ?? "Process"} <strong>${name || "Record"}</strong> ?`;
};

type ISwalActionProps = {
  model: string;
  name: string;
  type?: IHtmlAskActionType;
  action?: string;
  icon?: SweetAlertIcon;
};

export const swalActionProps = (props: ISwalActionProps): SweetAlertOptions => {
  const { model, name, type, icon, action } = props;

  let _icon: SweetAlertIcon | undefined = undefined;

  switch (type) {
    case "Delete":
      _icon = "warning";
      break;
    case "Update":
      _icon = "question";
      break;
    case "Save":
      _icon = "question";
      break;
  }

  return {
    icon: icon ?? _icon,
    title: `${action ?? type} ${model}?`,
    html: htmlAskAction({ name, type: type }),
    text: action,
    confirmButtonText: type,
  };
};
