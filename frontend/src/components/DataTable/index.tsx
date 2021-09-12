import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";
import { BsPeopleFill, BsPeopleCircle } from "react-icons/bs";
import { FcBusiness } from "react-icons/fc";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";

const DataTable = () => {

    const [activePage, setActivePage] = useState(0);

    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=10&sort=date,desc`)
            .then(response => {
                setPage(response.data);
            });
    }, [activePage]);

    const changePage = (index: number) => {
        setActivePage(index);
    }

    return (
        <>
            <Pagination page={page} onPageChange={changePage}/>

            <div className="table-responsive">
                <table className="table table-striped table-sm table-hover table-bordered">
                    <thead>
                        <tr className="text-center">
                            <th><AiOutlineCalendar /> Data</th>
                            <th><BsPeopleCircle /> Vendedor</th>
                            <th><BsPeopleFill /> Clientes visitados</th>
                            <th><FcBusiness /> Negócios fechados</th>
                            <th><FaMoneyBillAlt /> Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            <tr className="text-center" key={item.id}>
                                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                                <td>{item.seller.name}</td>
                                <td>{item.visited}</td>
                                <td>{item.deals}</td>
                                <td>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(item.amount)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable;