import { Card, CardContent } from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";

function AddressCard(addressInfo) {
  return (
    <Card>
      <CardContent className="grid gap-4">
        <Label>{addressInfo?.address}</Label>
        <Label>{addressInfo?.city}</Label>
        <Label>{addressInfo?.pincode}</Label>
        <Label>{addressInfo?.phone}</Label>
        <Label>{addressInfo?.notes}</Label>
      </CardContent>
    </Card>
  );
}

export default AddressCard;
