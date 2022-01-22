import React, { useReducer, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../misc/Config";

const INITIAL_STATE = {
  show: null,
  loading: true,
  error: null,
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return { show: action.payload, loading: false, error: null };
    }
    case "FETCH_FAIL": {
      return { ...prevState, loading: false, error: action.payload };
    }
    default:
      return prevState;
  }
};

function Show() {
  const [{ show, loading, error }, dispatch] = useReducer(
    reducer,
    INITIAL_STATE
  );

  const { id } = useParams();
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const data = await getApi(`shows/${id}?embed[]=seasons&embed[]=cast`);
        if (isMounted) {
          dispatch({ type: "FETCH_SUCCESS", payload: data });
        }
      } catch (err) {
        if (isMounted) {
          dispatch({ type: "FETCH_FAIL", payload: err.message });
        }
      }
    };
    fetchData();
    return () => (isMounted = false);
  }, [id]);

  if (loading) return <div>Data being loaded</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>this is show page with id : {id}</div>;
}

export default Show;
