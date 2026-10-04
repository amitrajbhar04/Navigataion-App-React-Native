export const isEmail = (value: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value.trim());
};
  
export const isPasswordStrong = (value: string): boolean => {
    return value.length >= 6;
};

export const isNotEmpty = (value: string): boolean => {
    return value.trim().length > 0;
};

export const isPhone = (value: string): boolean => {
    const regex = /^[0-9]{10}$/;
    return regex.test(value.trim());
};