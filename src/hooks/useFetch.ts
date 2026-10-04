import { useCallback, useEffect, useState } from 'react';
import { api } from '../services/api';

interface State<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string, immediate = true) {
  const [state, setState] = useState<State<T>>({
    data: null,
    loading: immediate,
    error: null,
  });

  const fetchData = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const { data } = await api.get<T>(url);
      setState({ data, loading: false, error: null });
    } catch (err: any) {
      setState({
        data: null,
        loading: false,
        error: err?.message || 'Something went wrong',
      });
    }
  }, [url]);

  useEffect(() => {
    if (immediate) fetchData();
  }, [fetchData, immediate]);

  return { ...state, refetch: fetchData };
}