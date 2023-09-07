import axios from 'axios';

axios.interceptors.request.use(
  function (config) {
    const { origin } = new URL(config.url);

    const allowedOrigins = [process.env.REACT_APP_BASE_URL];
    const token = localStorage.getItem('access-token');

    if (allowedOrigins.includes(origin)) {
      config.headers.Authorization = token;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export async function getProjectList() {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/projects`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Veri alınırken hata oluştu:', error);
  }
}

export async function sendContactForm(formData) {
  const url = `${process.env.REACT_APP_BASE_URL}/contact`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      return 'Successful';
    } else {
      const responseData = await response.text();
      throw new Error(responseData);
    }
  } catch (error) {
    throw error;
  }
}
export const sendRegisterForm = async (formData) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, {
      email: formData.email,
      password: formData.password,
    });

    if (response.status === 200) {
      return response;
    } else {
      throw new Error(response.data);
    }
  } catch (error) {
    throw error;
  }
};

export const fetchMe = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/me`);
  return data;
};

export const fetchLogout = async () => {
  const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {
    refresh_token: localStorage.getItem('refresh-token'),
  });
  return data;
};

export const fetchLogin = async (input) => {
  const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, input);
  return data;
};
