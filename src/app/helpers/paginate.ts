
//   this is the generalised paginate function that will accept the data as an array of any type ,skip,limit as the number and will return the data as an object with data and metadata as the key and value pair

export function paginate<T>(data: T[], skip: number = 0, limit: number = 30) {
    const total = data.length;
    const pagedData = data.slice(skip, skip + limit);
    // this will slice the data from the skip to the skip+limit
  
    return {
      data: pagedData,
      metadata: {
        total,
        skip,
        limit
      }
    };
  }

// data is the array of any type that will be passed to the function