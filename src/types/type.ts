// export type Status = "idle" | "loading" | "success" | "error";
// use
// const [status, setStatus] = useState<Status>("idle")
export type RequestState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success", data: any}
  | { status: "error", error: Error };
// use
// const [requestState, setRequestState] = useState<RequestState>({ status: "idle" })

// export type ThemeMode = "light" | "dark" | "system";

// export type RequestTheme =
//   | { themes: "default"}
//   | { themes: "blue"}