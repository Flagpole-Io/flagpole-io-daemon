const getRequiredEnvironmentVar = (name: string) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is a required environment variable.`);
  }
  return value;
};

export default getRequiredEnvironmentVar;
