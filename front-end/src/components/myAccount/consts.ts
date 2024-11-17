import * as Yup from "yup";
import { ChangePassword } from "./types";
import { passErrorMessage } from "./passErrorMessage";

export const passwordValidationSchema: Yup.Schema<ChangePassword> =
  Yup.object().shape({
    oldPassword: Yup.string().required(passErrorMessage.currentPassword),
    newPassword: Yup.string()
      .min(6, passErrorMessage.characters)
      .notOneOf([Yup.ref("oldPassword")], passErrorMessage.newOldPassword)
      .required(passErrorMessage.required),
  });

export const passwordInitialValues: ChangePassword = {
  oldPassword: "",
  newPassword: "",
};
