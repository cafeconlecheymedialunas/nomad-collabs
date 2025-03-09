import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    // Función para crear un rango de páginas alrededor de la página actual
    const createPageRange = () => {
        const range = [];
        const rangeSize = 5;  // Número de páginas a mostrar

        let start = Math.max(1, currentPage - Math.floor(rangeSize / 2));
        let end = Math.min(totalPages, currentPage + Math.floor(rangeSize / 2));

        if (end - start < rangeSize - 1) {
            if (start === 1) {
                end = Math.min(totalPages, start + rangeSize - 1);
            } else {
                start = Math.max(1, end - rangeSize + 1);
            }
        }

        for (let i = start; i <= end; i++) {
            range.push(i);
        }
        return range;
    };

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="mbp_pagination mt30 text-center">
            <ul className="page_navigation">
                {/* Botón de retroceso */}
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <FaAngleLeft />
                    </button>
                </li>

                {/* Mostrar números de páginas */}
                {createPageRange().map((page) => (
                    <li
                        key={page}
                        className={`page-item ${page === currentPage ? 'active' : ''}`}
                        aria-current={page === currentPage ? 'page' : undefined}
                    >
                        <button
                            className="page-link"
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}

                {/* Puntos suspensivos */}
                {totalPages > 5 && currentPage < totalPages - 2 && (
                    <li className="page-item d-inline-block d-sm-none">
                        <button className="page-link">...</button>
                    </li>
                )}

                {/* Página siguiente */}
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <FaAngleRight />
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
