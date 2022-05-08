import React, { useEffect, useState } from 'react';
import CustomTable from './CustomTable';

const PageTable = ({headers, fetchData}) => {
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        async function getData() {
            await fetchData(limit, page)
                .then(response => {
                    setTotal(Math.ceil(response.data.count / limit));
                    setData(response.data.results);
                }).catch(error => console.log(error));
        };
        getData();    
    }, [page, limit])

    const nextPage = () => {
        if (total > page) {
            setPage(page + 1);
        }
    }

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    return (
        <div>
            <CustomTable headers={headers} body={data} />
            <div>
                {page!==1 &&
                    <button onClick={prevPage}>
                        Назад
                    </button>
                }
                {page!==total &&
                    <button onClick={nextPage}>
                        Вперед
                    </button>
                }
            </div>
        </div>
    )
};

export default PageTable;