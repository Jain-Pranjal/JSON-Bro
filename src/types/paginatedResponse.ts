export type PaginatedResponse<T> = {
    data: T[];
    metadata: {
      total: number;
      skip: number;
      limit: number;
    };
  };
  