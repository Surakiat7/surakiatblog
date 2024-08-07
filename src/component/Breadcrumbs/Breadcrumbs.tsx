import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { TbSmartHome } from "react-icons/tb";
import Link from "next/link";
import { useMobileScreen } from "@/contexts/MobileContext";

type BreadcrumbsComponentProps = {
  items: { name: string; href?: string }[];
};

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const BreadcrumbsComponent: React.FC<BreadcrumbsComponentProps> = ({
  items,
}) => {
  const { mobileScreen } = useMobileScreen();
  const maxLength = mobileScreen ? 24 : Infinity;

  return (
    <Breadcrumbs variant="solid" radius={"md"} className="breadcrumbs">
      {items.map((item, index) => (
        <BreadcrumbItem
          key={index}
          separator={index < items.length - 1 ? "/" : undefined}
          startContent={index === 0 ? <TbSmartHome /> : undefined}
          className="breadcrumb-item"
          aria-current={index === items.length - 1 ? "page" : undefined}
        >
          {item.href ? (
            <Link href={item.href} className="breadcrumb-link">
              {truncateText(item.name, maxLength)}
            </Link>
          ) : (
            truncateText(item.name, maxLength)
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;