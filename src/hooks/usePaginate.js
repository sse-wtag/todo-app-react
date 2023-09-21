import { useEffect, useState } from "react";

function usePaginate({ collection = [], perPage = 5, startIndex = 0, startPage = 1, isCollectionCreating = false }) {
    const [currentPage, setCurrentPage] = useState(startPage);
    const [hasMore, setHasMore] = useState(false);
    const [isLastPage, setIsLastPage] = useState(false);
    const data = collection.slice(startIndex, perPage * currentPage - Number(isCollectionCreating));
    const collectionLength = collection.length + Number(isCollectionCreating);
    const totalPageCount = Math.ceil(collectionLength / perPage);

    useEffect(() => {
        setHasMore(collectionLength > perPage && currentPage < totalPageCount);
        setIsLastPage(collectionLength > perPage && currentPage >= totalPageCount);
    }, [collectionLength, currentPage, perPage, totalPageCount]);

    const goto = (pageNo) => {
        if (pageNo < startPage || pageNo > totalPageCount || pageNo === currentPage) {
            return;
        }
        setCurrentPage(pageNo);
    };

    const next = () => {
        if (isLastPage) {
            return;
        }
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const previous = () => {
        if (currentPage <= startPage) {
            return;
        }
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const reset = () => {
        setCurrentPage(startPage);
    };

    return {
        currentPage,
        data,
        goto,
        hasMore,
        isLastPage,
        next,
        previous,
        reset,
    };
}

export default usePaginate;
