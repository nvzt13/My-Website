import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectCardProps } from '@/type/types'
import { Post } from '@prisma/client';

export default function OverflowCard({ title, technologies, date, file, address: href }: Post) {
  return (
    <div className="flex justify-center my-4">
    <Card
      variant="outlined"
      sx={{
        width: 320,
        borderRadius: '16px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      className="group hover:scale-105 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700"
    >
      <CardOverflow>
        <AspectRatio ratio="2">
          <Image
            height={500}
            width={500}
            src={file || null} 
            loading="lazy"
            alt={title}
            className="object-contain object-[50%_0] w-full h-full rounded-t-lg transition-all duration-300 ease-in-out group-hover:opacity-80"
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography
          level="title-md"
          className="group-hover:text-indigo-600 transition-all duration-300 ease-in-out dark:text-white"
        >
          {title}
        </Typography>
        <Typography
          level="body-xs"
          textColor="text.secondary"
          className="group-hover:text-gray-900 transition-all duration-300 ease-in-out dark:text-gray-400 dark:group-hover:text-gray-200"
        >
          Technologies: {technologies}
        </Typography>
      </CardContent>
      <CardOverflow variant="soft" className=" dark:bg-gray-900 text-dark dark:text-light bg-light">
        <Divider inset="context" className="dark:bg-gray-700" />
        <CardContent orientation="horizontal" className="flex justify-between items-center">
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: 'md' }}
            className="group-hover:text-indigo-600 transition-all duration-300 ease-in-out dark:text-light dark:group-hover:text-indigo-500"
          >
            <Link href={href} target="_blank" rel="noopener noreferrer">
              Visit Project
            </Link>
          </Typography>
          <Typography
            level="body-sm"
            className="group-hover:text-gray-900 transition-all duration-300 ease-in-out  dark:text-light dark:group-hover:text-gray-300"
          >
            {date}
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  </div>
  
  );
}