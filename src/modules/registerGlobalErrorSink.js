import { toast } from "sonner";

export default function registerGlobalErrorSink() {
  // Catch uncaught JavaScript errors
  window.addEventListener("error", (event) => {
    if (event.error instanceof Error) {
      const errorMessage = event.error.message;
      toast.error(errorMessage);
    } else if (typeof event.message === "string") {
      toast.error(event.message);
    }
  });

  // Catch unhandled promise rejections
  window.addEventListener("unhandledrejection", (event) => {
    if (event.reason instanceof Error) {
      const reasonMessage = event.reason.message;
      toast.error(reasonMessage);
    } else if (typeof event.reason === "string") {
      toast.error(event.reason);
    }
  });

}