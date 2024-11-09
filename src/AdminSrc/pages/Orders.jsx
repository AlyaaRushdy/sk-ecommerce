
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/ui/Header";
import DataTable from "@/components/ui/DataTable";
import { orderColumns } from "../components/data table columns/ordersColumns";
 
function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/orders/")
      .then((res) => res.data)
      .then((res) => {
        setOrders(res.results);
        console.log(res.results);
      })
      .catch((err) => {
        console.error("Failed to fetch orders:", err);
      });
  }, []);

  const handleStatusUpdate = (id, currentStatus) => {
    let status;
    switch (currentStatus) {
      case "Under testing":
        status = "Shipping";
        break;
      case "Shipping":
        status = "Completed";
        break;
      case "Completed":
        status = "Under testing";
        break;
      default:
        status = "Under testing";
    }
    
  
    console.log("Updating order ID:", id, "to status:", status); 
  
    axios.put(`http://localhost:5000/orders/update/${id}`, { status }) 
      .then((res) => {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === id ? { ...order, status: status } : order
          )
        );
      })
      .catch((error) => {
        console.error("Failed to update status:", error);
      });
  };
  
  return (
    <>
      <div className="p-5">
        <Header currentPage={"Orders"} />
        <div className="py-4">
          <DataTable
            data={orders}
            columns={orderColumns(handleStatusUpdate)} // pass this function to orderColumns
            tableTitle={"All Orders"}
            className="py-4"
          />
        </div>
      </div>
    </>
  );
}
export default Orders;



