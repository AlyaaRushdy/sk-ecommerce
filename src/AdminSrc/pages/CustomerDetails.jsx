import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Banknote,
  LogIn,
  MapPin,
  NotebookText,
  Smartphone,
  UserPlus,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
// import { TrendingUp } from "lucide-react";
// import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";
import DataTable from "@/AdminSrc/components/shared/DataTable";
import { customerOrdersColumns } from "@/AdminSrc/components/data table columns/customerOrdersColumns";
import Header from "@/AdminSrc/components/shared/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomerInfo from "@/AdminSrc/components/customerInfo";

export const description = "A line chart";

const chartData = [
  { month: "January", orders: 1 },
  { month: "February", orders: 3 },
  { month: "March", orders: 2 },
  { month: "April", orders: 0 },
  { month: "May", orders: 1 },
  { month: "June", orders: 1 },
];

const chartConfig = {
  orders: {
    label: "orders",
    color: "hsl(var(--chart-1))",
  },
};

function CustomerDetails() {
  const { id } = useParams();
  const [customer, setCustomer] = useState({});
  const [customerOrders, setCustomerOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((res) => res.data)
      .then((res) => {
        setCustomer(res.user);
      })
      .catch((err) => {
        console.log(err.response);
      });

    axios
      .get(`http://localhost:5000/orders/user/${id}`)
      .then((res) => res.data)
      .then((res) => {
        setCustomerOrders(res.data.results);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setCustomerOrders([]);
        } else console.log(err.response);
      });
  }, [id]);

  const totalRevinue = customerOrders?.reduce((prev, curr) => {
    prev += curr.totalPrice;
    return prev;
  }, 0);

  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  return (
    <>
      {Object.keys(customer).length > 0 && (
        <div className="p-5">
          <Header
            currentPage={`${customer.fname} ${customer.lname}`}
            prevPage={"Customers"}
            prevPageLink={"/customers"}
          />

          <div className="flex flex-col md:flex-row gap-4 py-4">
            <Card className="w-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Orders
                </CardTitle>
                <NotebookText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">
                  {customerOrders.length}
                </div>
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <Banknote className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">
                  E{formatter.format(totalRevinue)}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 pb-4">
            <Card className="w-full lg:w-1/3">
              <CardContent className="pt-6 flex flex-col gap-2">
                <div className="flex flex-col gap-2 items-center text-center">
                  <Avatar className="h-16 w-16 flex ">
                    <AvatarImage
                      src={customer.profileImage ?? customer.profileImage}
                      alt="Avatar"
                    />
                    <AvatarFallback>
                      {customer.fname[0] + customer.lname[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p>{`${customer.fname} ${customer.lname}`}</p>
                    <p className="text-muted-foreground">{customer.email}</p>
                  </div>
                </div>
                <Separator className="mb-2" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sm:gap-y-4 lg:gap-y-2 gap-x-6">
                  <CustomerInfo title={"Phone Number"} value={customer.phone}>
                    <Smartphone className="text-muted-foreground w-5" />
                  </CustomerInfo>
                  <CustomerInfo
                    title={"Signup Date"}
                    value={new Date(customer.createdAt).toDateString()}
                  >
                    <UserPlus className="text-muted-foreground w-5" />
                  </CustomerInfo>
                  <CustomerInfo
                    title={"Last Login date"}
                    value={
                      customer.lastLoginDate ? customer.lastLoginDate : "-"
                    }
                  >
                    <LogIn className="text-muted-foreground w-5" />
                  </CustomerInfo>
                  <CustomerInfo
                    title={"Account Status"}
                    value={customer.accountStatus}
                  >
                    <MapPin className="text-muted-foreground w-5" />
                  </CustomerInfo>
                  <CustomerInfo
                    title={"Payment Method"}
                    value={"Cash on Delivery"}
                  >
                    <Banknote className="text-muted-foreground w-5" />
                  </CustomerInfo>
                </div>
              </CardContent>
            </Card>

            {/* <Card className="w-full lg:w-2/3">
              <CardHeader>
                <CardTitle>Orders</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={chartConfig}
                  className="max-h-72 min-w-full"
                >
                  <LineChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                      dataKey="orders"
                      type="natural"
                      stroke="var(--color-orders)"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                  Trending up by 5.2% this month{" "}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                  Showing total orders since signing up
                </div>
              </CardFooter>
            </Card> */}
          </div>

          <DataTable
            data={customerOrders}
            columns={customerOrdersColumns}
            tableTitle={"Orders"}
          />
        </div>
      )}
    </>
  );
}

export default CustomerDetails;
