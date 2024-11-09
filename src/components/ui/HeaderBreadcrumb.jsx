/* eslint-disable react/prop-types */
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const HeaderBreadcrumb = ({ prevPageLink, prevPage, currentPage }) => {
  return (
    <Breadcrumb className="flex-grow">
      <BreadcrumbList className="sm:gap-1 text-2xl leading-none font-medium">
        {prevPage && (
          <>
            <BreadcrumbItem className="hidden md:inline-flex">
              <BreadcrumbLink asChild>
                <Link
                  to={prevPageLink}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  {prevPage}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:inline-flex [&>svg]:size-5 self-end" />
          </>
        )}
        <BreadcrumbItem>
          <BreadcrumbPage className="text-foreground">
            {currentPage}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default HeaderBreadcrumb;
