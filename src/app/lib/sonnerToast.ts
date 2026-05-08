import { toast } from "sonner"

export const luxuryToast = {
  success: (msg: string) =>
    toast.success(msg, {
      style: {
        background: "rgba(15,15,15,0.9)",
        color: "#d1fae5",
        border: "1px solid rgba(16,185,129,0.2)",
        backdropFilter: "blur(10px)",
      },
    }),

  error: (msg: string) =>
    toast.error(msg, {
      style: {
        background: "rgba(15,15,15,0.9)",
        color: "#fee2e2",
        border: "1px solid rgba(239,68,68,0.2)",
        backdropFilter: "blur(10px)",
      },
    }),
}