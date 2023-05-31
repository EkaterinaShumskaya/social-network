import React, {FC, useEffect} from "react";
import {TablePagination} from "@material-ui/core";

type PaginationPropsType = {
    totalUsersCount: number
    currentPage: number
    pageSize: number
    onPageChanged: (page: number, pageSize?: number) => void
}
export const Paginator: FC<PaginationPropsType> = ({
                                                       totalUsersCount,
                                                       pageSize,
                                                       onPageChanged,
                                                       currentPage
                                                   }) => {
    const [rowsPerPage, setRowsPerPage] = React.useState(pageSize);

    useEffect(() => {
        if (pageSize === rowsPerPage) return
        setRowsPerPage(pageSize)
    }, [pageSize])

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        debugger
        setRowsPerPage(parseInt(event.target.value, 10));
        onPageChanged(1, parseInt(event.target.value, 10))
    };
    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
        onPageChanged(page + 1, rowsPerPage)

    };
    return (
        <TablePagination
            component="div"
            labelRowsPerPage="Users per page:"
            count={totalUsersCount}
            page={currentPage - 1}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
}