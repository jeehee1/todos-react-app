import { useCallback } from "react";
import { useReducer } from "react";

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null, data: null };
    case "RESPONSE":
      return { ...curHttpState, loading: false, data: action.responseData };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    default:
      throw new Error("Error!!!!");
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
    data: null,
  });

  const sendRequest = useCallback(async (url, method, body = null) => {
    console.log("send");
    dispatchHttp({ type: "SEND" });
    try {
      const response = await fetch(url, {
        method: method,
        body: body,
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        dispatchHttp({ type: "ERROR", errorMessage: "Something went wrong!" });
        return;
      }
      const data = await response.json();
      console.log("response");
      dispatchHttp({ type: "RESPONSE", responseData: data });
    } catch (err) {
      dispatchHttp({
        type: "ERROR",
        errorMessate: "err.message" || "Something went wrong!",
      });
    }
  }, []);

  return {
    loading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
  };
};

export default useHttp;
