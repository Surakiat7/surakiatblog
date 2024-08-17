import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';
import Link from 'next/link';
import useMediaQuery from '@/hooks/UseMediaQuery';
import { BreadcrumbsComponentProps } from '@/types';
import { truncateText } from '@/@core/utils/truncateText';

const BreadcrumbsComponent: React.FC<BreadcrumbsComponentProps> = ({
  items,
}) => {
  const isSm = useMediaQuery('sm');
  const maxLength = isSm ? 24 : Infinity;

  return (
    <Breadcrumbs variant="solid" radius={'md'} className="breadcrumbs">
      {items.map((item, index) => (
        <BreadcrumbItem
          key={index}
          separator={index < items.length - 1 ? '/' : undefined}
          className="breadcrumb-item"
          aria-current={index === items.length - 1 ? 'page' : undefined}
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
