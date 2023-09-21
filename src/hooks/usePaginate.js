import { useEffect, useState } from "react";

function usePaginate({ collection = [], perPage = 5, startIndex = 0, startPage = 1, isCollectionCreating = false }) {
    const [currentPage, setCurrentPage] = useState(startPage);
    const [hasMore, setHasMore] = useState(false);
    const [isLastPage, setIsLastPage] = useState(false);
    const data = collection.slice(startIndex, perPage * currentPage - Number(isCollectionCreating));

    useEffect(() => {
        const collectionLength = collection.length + Number(isCollectionCreating);
        const totalPageCount = Math.ceil(collectionLength / perPage);

        setHasMore(collectionLength > perPage && currentPage < totalPageCount);
        setIsLastPage(collectionLength > perPage && currentPage === totalPageCount);
    }, [currentPage, perPage, collection, isCollectionCreating]);

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
