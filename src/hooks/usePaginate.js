import { useEffect, useState } from "react";

function usePaginate({ collection = [], perPage = 5, startIndex = 0, startPage = 1 }) {
    const [currentPage, setCurrentPage] = useState(startPage);
    const [hasMore, setHasMore] = useState(false);
    const [isLastPage, setIsLastPage] = useState(false);
    const data = collection.slice(startIndex, perPage * currentPage);

    useEffect(() => {
        const totalPageCount = Math.ceil(collection.length / perPage);

        setHasMore(collection.length > perPage && currentPage < totalPageCount);
        setIsLastPage(collection.length > perPage && currentPage === totalPageCount);
    }, [currentPage, perPage, collection]);

    return {
        currentPage,
        data,
        hasMore,
        isLastPage,
        setCurrentPage,
        setHasMore,
        setIsLastPage,
    };
}

export default usePaginate;
