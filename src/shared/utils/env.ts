const getEnvVar = (key: string) => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return import.meta.env[key] || "";
};

export const API_URL = getEnvVar("VITE_REACT_APP_SUPABASE_URL");

export const API_KEY = getEnvVar("VITE_REACT_APP_SUPABASE_PUBLIC_KEY");