import { ADD_CAR_FAIL, ADD_CAR_LOAD, ADD_CAR_SUCCESS, CLEAR_ERRORS_CAR, CLEAR_SUCCESS_CAR, DELETE_CAR_FAIL, DELETE_CAR_LOAD, DELETE_CAR_SUCCESS, EDIT_CAR_FAIL, EDIT_CAR_LOAD, EDIT_CAR_SUCCESS, GET_CARS_FAIL, GET_CARS_LOAD, GET_CARS_SUCCESS, GET_ONE_CAR_FAIL, GET_ONE_CAR_LOAD, GET_ONE_CAR_SUCCESS } from "../ActionTypes/carActionTypes"
import axios from "axios"

export const getAllCars = () => async (dispatch) => {
    dispatch({type: GET_CARS_LOAD})
    try {
        const result = await axios.get("/api/cars/get_all_cars");
        dispatch({type: GET_CARS_SUCCESS, payload: result.data})
    } catch (error) {
        dispatch({type: GET_CARS_FAIL, payload: error.response.data})
    }
}

export const getOneCar = (id) => async (dispatch) => {
  dispatch({ type: GET_ONE_CAR_LOAD });
  try {
    const result = await axios.get(`/api/cars/get_car/${id}`);
    dispatch({ type: GET_ONE_CAR_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_ONE_CAR_FAIL, payload: error.response.data });
  }
};

export const addCar = (newCar) => async (dispatch) => {
  dispatch({ type: ADD_CAR_LOAD });
  try {
    const result = await axios.post('/api/cars/add_car', newCar);
    dispatch({ type: ADD_CAR_SUCCESS, payload: result.data });
    dispatch(getAllCars());
  } catch (error) {
    dispatch({ type: ADD_CAR_FAIL, payload: error.response.data });
  }
};


export const deleteCar = (id) => async (dispatch) => {
  dispatch({ type: DELETE_CAR_LOAD });
  try {
    const result = await axios.delete(`/api/cars/delete_car/${id}`);
    dispatch({ type: DELETE_CAR_SUCCESS, payload: result.data });
    dispatch(getAllCars());
  } catch (error) {
    dispatch({ type: DELETE_CAR_FAIL, payload: error.response.data });
  }
};


export const editCar = (id, newData) => async (dispatch) => {
  dispatch({ type: EDIT_CAR_LOAD });
  try {
    const result = await axios.put(`/api/cars/update_car/${id}`, newData);
    dispatch({ type: EDIT_CAR_SUCCESS, payload: result.data });
    dispatch(getAllCars());
  } catch (error) {
    dispatch({ type: EDIT_CAR_FAIL, payload: error.response.data });
  }
};


export const clearSuccessCar = () => {
  return {
    type: CLEAR_SUCCESS_CAR,
  };
};

export const clearErrorsCar = () => {
  return {
    type: CLEAR_ERRORS_CAR,
  };
};