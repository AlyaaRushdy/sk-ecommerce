import { useEffect, useState } from "react";
import{Card , CardContent} from "@/components/ui/card"
import Header from "@/components/ui/Header";

import { useParams } from "react-router-dom";
import axios from "axios";

function OrderDetails() {
    const { id } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/orders/${id}`)
            .then((res) => {
                setOrderDetails(res.data.results);
            })
            .catch((error) => {
                console.error("Error fetching order details:", error);
            });
    }, [id]);

    const fixImagePath = (imagePath) => {
        return imagePath.replace(
            "E:\\DEPI\\FinalProject backend\\ecommerce-dashboard-backend\\images\\", 
            "http://localhost:5000/images/"
        );
    };

    if (!orderDetails) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <>
            <div className="p-5">
                <Header currentPage={` ${id}`} prevPage={"Orders"} prevPageLink={"/orders"} />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-4">
                    {orderDetails.products.slice(0, 3).map((product) => (
                        <Card key={product.productId} className="flex flex-col mb-4">
                            <CardContent className="flex flex-col items-center p-4">
                                <img
                                    src={fixImagePath(product.images)}
                                    alt={product.title}
                                    className="mb-2 w-full h-auto max-w-[250px] md:max-w-[250px]"
                                />
                                <div className="text-left">
                                    <h2 className="text-lg font-bold m-2">{product.title}</h2>
                                    <p className="text-sm mb-1.5"><strong className="text-orange-700 text-base">SKU : </strong> {product.sku}</p>
                                    <p className="text-sm mb-1.5"><strong className="text-orange-700 text-base">Quantity :</strong> {product.quantity}</p>
                                    <p className="text-sm mb-1.5"><strong className="text-orange-700 text-base">Total Price : </strong>{orderDetails.totalPrice || 'NAN'}</p>
                                    <p className="text-sm mb-1.5"><strong className="text-orange-700 text-base">Order Date :</strong> {new Date(orderDetails.createdAt).toLocaleDateString()}</p>
                                    <p className="text-sm mb-1.5"><strong className="text-orange-700 text-base">Status :</strong> {orderDetails.status}</p>
                                </div>
                            </CardContent>
                               </Card>
                    ))}
                </div>
            </div>
        </>
    );
}

export default OrderDetails;