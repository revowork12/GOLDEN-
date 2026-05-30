const BASE = import.meta.env.BASE_URL;
export const p = (path) => `${BASE}${path.replace(/^\//, '')}`;
