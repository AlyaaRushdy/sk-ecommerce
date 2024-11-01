import { ArchiveX } from "lucide-react";
function NoProductsFound() {
  return (
    <>
      <div className="flex-grow flex flex-col justify-center items-center gap-4">
        <ArchiveX size={100} className="text-foreground" />
        <p className="capitalize text-xl">No Products Found</p>
      </div>
    </>
  );
}

export default NoProductsFound;
