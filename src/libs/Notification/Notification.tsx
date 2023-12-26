import React from "react";
import { Slide, ToastContainer } from "react-toastify";
import type { FC, ReactNode } from "react";

import type { ToastOptions } from "./Notification.interfaces";
import { NotyTypes } from "./Notification.interfaces";
import { NOTIFICATIONS } from "./Notification.constants";

import "react-toastify/dist/ReactToastify.css";

export const NotificationComponent: FC = () => (
  <ToastContainer
    position="top-right"
    newestOnTop
    draggable={false}
    hideProgressBar
    pauseOnHover={false}
    icon={false}
    pauseOnFocusLoss={false}
  />
);

const toastFactory =
  (type: NotyTypes) =>
  (title: string, content?: ReactNode, options?: ToastOptions): React.ReactText =>
    NOTIFICATIONS[type].action(title, {
      transition: Slide,
      theme: "dark",
      autoClose: 5000,
      ...NOTIFICATIONS[type],
      ...options,
    });

type ToastFn = (title: string, content?: ReactNode, options?: ToastOptions) => React.ReactText;

export interface INotification {
  success: ToastFn;
  error: ToastFn;
  warning: ToastFn;
}

export const Notification: INotification = {
  success: toastFactory(NotyTypes.SUCCESS),
  error: toastFactory(NotyTypes.ERROR),
  warning: toastFactory(NotyTypes.WARNING),
};
