interface TablePaginationProps {
    pageIndex: number;
    pageCount: number;
    canPreviousPage: boolean;
    canNextPage: boolean;
    onPreviousPage: () => void;
    onNextPage: () => void;
    pageSize: number;
    setPageSize: (size: number) => void;
}

export function Pagination({
    pageIndex,
    pageCount,
    canPreviousPage,
    canNextPage,
    onPreviousPage,
    onNextPage,
    pageSize,
    setPageSize,
}: TablePaginationProps) {
    return (
        <div className="flex justify-between items-center">
            {/* Navigation Buttons */}
            <div className="flex items-center space-x-2">
                <button
                    onClick={onPreviousPage}
                    disabled={!canPreviousPage}
                    className={`
                        inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg border transition-all duration-200
                        ${canPreviousPage
                            ? 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm'
                            : 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
                        }
                    `}
                >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Anterior
                </button>

                <div className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="font-medium">{pageIndex + 1}</span>
                    <span className="text-gray-400">de</span>
                    <span className="font-medium">{pageCount}</span>
                </div>

                <button
                    onClick={onNextPage}
                    disabled={!canNextPage}
                    className={`
                        inline-flex items-center px-3 py-2 mr-4 text-sm font-medium rounded-lg border transition-all duration-200
                        ${canNextPage
                            ? 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm'
                            : 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
                        }
                    `}
                >
                    Próxima
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Page Size Selector */}
            <div className="flex items-center space-x-3">
                <label className="text-sm text-gray-600 font-medium">Registos por página:</label>
                <div className="relative">
                    <select
                        value={pageSize}
                        onChange={(e) => setPageSize(Number(e.target.value))}
                        className="
                            appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-gray-700
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                            hover:border-gray-400 transition-all duration-200 cursor-pointer
                        "
                    >
                        {[5, 10, 20, 50, 100].map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}