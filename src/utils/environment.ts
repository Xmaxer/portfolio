const requiredEnvironmentVariables = ['VITE_GA_MEASUREMENT_ID'];

requiredEnvironmentVariables.forEach((requiredEnvironmentVariable) => {
  if (!import.meta.env[requiredEnvironmentVariable]) {
    throw new Error(
      `Missing required environment variable ${requiredEnvironmentVariable}`,
    );
  }
});

const Environment = {
  VITE_GA_MEASUREMENT_ID: import.meta.env.VITE_GA_MEASUREMENT_ID as string,
};

export default Environment;
