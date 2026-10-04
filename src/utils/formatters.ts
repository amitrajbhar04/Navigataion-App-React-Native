export const formatDate = (date: string | Date): string => {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };
  
  export const formatTime = (date: string | Date): string => {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  
  export const truncate = (text: string, length = 50): string => {
    return text.length > length ? `${text.substring(0, length)}...` : text;
  };
  
  export const capitalize = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };
  
  export const formatCurrency = (amount: number): string => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };