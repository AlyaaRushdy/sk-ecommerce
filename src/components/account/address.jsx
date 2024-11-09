import { useState } from "react";
import CommonForm from "../shared/form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { addressFormControls } from "@/config";
import { useDispatch, useSelector } from "react-redux";
import { addNewAddress } from "@/slices/addressSlice";

const initialAddressFormData = {
    address: "",
    city: "",
    phone: "",
    pincode: "",
    notes: ""
}

function Address() {
    const [formData, setFormData] = useState(initialAddressFormData);
    const dispatch = useDispatch();
    const {token} = useSelector(state => state.user)
    console.log("User state in Redux:", token);

    

    

    function handleManageAddress(e) {
        e.preventDefault();

        console.log("Form Data:", formData);

        dispatch(addNewAddress({
            formData,
            token
        })).then(data => {
            console.log(data);
        });
    }



    function isFormValid(){
        return Object.keys(formData)
               .map(key => formData[key].trim() !== "")
               .every(item => item);
    }




    return ( 
        <Card>
            <div className="">
                AddressList
            </div>
            <CardHeader>
                <CardTitle>
                    Add New Address
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <CommonForm 
                    formControls={addressFormControls}
                    formData={formData}
                    setFormData={setFormData}
                    buttonText={'Add'}
                    onSubmit={handleManageAddress}
                    isBtnDisabled={isFormValid}
                />

            </CardContent>
            
            

        </Card>
     );
}

export default Address;