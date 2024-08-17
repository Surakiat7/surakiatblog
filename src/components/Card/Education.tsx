import React from 'react';
import { Card, CardHeader, CardBody, Divider, Image } from '@nextui-org/react';
import { CardEducationsProps } from '@/types';
import { useThemeColors } from '@/@core/utils/themeColorClass';

const CardEducations: React.FC<CardEducationsProps> = ({ data }) => {
  const {
    bgColorSencondaryClass,
    borderColorClass,
    dividerColor,
  } = useThemeColors();

  return (
    <div className="w-full flex sm:flex-col gap-4">
      {data.map((edu, index) => (
        <Card key={index} className={`w-full ${bgColorSencondaryClass}`}>
          <CardHeader className="flex sm:flex-col gap-3">
            <Image
              alt="education logo"
              className={`object-cover h-full border ${borderColorClass}`}
              height={60}
              radius="sm"
              isZoomed
              src={edu.logo}
              width={60}
            />
            <div className="flex sm:items-center sm:flex-col sm:gap-2 justify-between w-full">
              <div className="flex flex-col sm:text-center">
                <p className="text-lg font-semibold">{edu.program}</p>
                <p className="text-small text-default-500">{edu.institution}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-bold">{edu.duration}</p>
              </div>
            </div>
          </CardHeader>
          <Divider style={{ backgroundColor: dividerColor }} />
          <CardBody>
            <p className="text-sm">{edu.description}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default CardEducations;
