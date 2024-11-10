/* eslint-disable react/prop-types */
function CustomerInfo({ title, value, children }) {
  return (
    <>
      <div className="flex gap-2 mb-1">
        {children}
        <div>
          <p className="font-semibold mb-.5">{title}</p>
          <p className="text-muted-foreground">{value}</p>
        </div>
      </div>
    </>
  );
}

export default CustomerInfo;
