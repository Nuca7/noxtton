import { createContext, useContext, useState, useEffect } from "react";

const InfiniteScrollContext = createContext();

const InfiniteScrollContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function infiniteScroll() {
    const innerHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const scrollHeight = document.body.scrollHeight;
    if (innerHeight + scrollY >= scrollHeight && !loading) {
      setPage(page + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    return () => window.removeEventListener("scroll", infiniteScroll);
  }, [loading]);

  return (
    <InfiniteScrollContext.Provider
      value={{
        page,
        setPage,
        loading,
        setLoading,
      }}
    >
      {children}
    </InfiniteScrollContext.Provider>
  );
};

export const useInfiniteScroll = () => {
  return useContext(InfiniteScrollContext);
};

export default InfiniteScrollContextProvider;
