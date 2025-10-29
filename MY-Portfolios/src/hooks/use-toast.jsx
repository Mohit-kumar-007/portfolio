export const useToast = () => {
  const toast = (config) => {
    console.log('Toast:', config);
  };
  return { toast };
};
