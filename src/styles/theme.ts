export const theme = {
    colors: {
      primary: '#3b82f6',
      primaryHover: '#2563eb',
      edit: '#c2c2c2',
      editHover: '#d2d2d2',
      delete: '#ef4444',
      deleteHover: '#dc2626',
      border: '#e5e7eb',
      text: '#374151',
      background: '#f3f4f6',
      white: '#ffffff',
      error: '#ef4444',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
    },
    fontSize: {
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
  };

  export type Theme = typeof theme;
