import { BASE_URL } from '@/constants/api';
import axios from 'axios';

const API_URL = `${BASE_URL}/drivers`; // Update with the correct backend server URL

export const registerDriver = async (driverData) => {
  try {
    const response = await axios.post(API_URL, driverData);
    return response.data;
  } catch (error) {
    console.error('Error registering driver:', error);
    throw error;
  }
};

export const getDrivers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching drivers:', error);
    throw error;
  }
};
