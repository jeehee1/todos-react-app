import { useCallback } from "react";
import { useReducer } from "react";

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null, data: null, extra: null };
    case "RESPONSE":
      return {
        ...curHttpState,
        loading: false,
        data: action.responseData,
        extra: action.extra,
        identifier: action.identifier,
      };
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
    extra: null,
    identifier: null,
  });

  const sendRequest = useCallback(
    async (url, method, body, reqInfo, reqIdentifier) => {
      dispatchHttp({ type: "SEND" });
      try {
        const response = await fetch(url, {
          method: method,
          body: body,
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          const data = await response.json();
          dispatchHttp({
            type: "ERROR",
            errorMessage: data.error
              ? data.error.message
              : "Something went wrong!",
          });
          return;
        }
        const data = await response.json();
        dispatchHttp({
          type: "RESPONSE",
          responseData: data,
          extra: reqInfo,
          identifier: reqIdentifier,
        });
      } catch (err) {
        dispatchHttp({
          type: "ERROR",
          errorMessage: "err.message" || "Something went wrong!",
        });
      }
    },
    []
  );

  return {
    loading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
    extra: httpState.extra,
    identifier: httpState.identifier,
  };
};

export default useHttp;
