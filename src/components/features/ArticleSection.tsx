'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import Image from 'next/image';

interface ArticleProps {
  id: number;
  category: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
}

const LatestArticles: React.FC = () => {
  const articles: ArticleProps[] = [
    {
      id: 1,
      category: 'Product News',
      title: 'Empowering every fund with free data rooms',
      author: 'PTWO',
      date: 'MAY 18, 2025 - 3 MIN READ',
      imageUrl: 'https://picsum.photos/id/180/400/250',
    },
    {
      id: 2,
      category: 'Product News',
      title: 'Empowering every fund with free data rooms',
      author: 'PTWO',
      date: 'MAY 18, 2025 - 3 MIN READ',
      imageUrl: 'https://picsum.photos/id/181/400/250',
    },
    {
      id: 3,
      category: 'Product News',
      title: 'Empowering every fund with free data rooms',
      author: 'PTWO',
      date: 'MAY 18, 2025 - 3 MIN READ',
      imageUrl: 'https://picsum.photos/id/182/400/250',
    },
    {
      id: 4,
      category: 'Product News',
      title: 'Empowering every fund with free data rooms',
      author: 'PTWO',
      date: 'MAY 18, 2025 - 3 MIN READ',
      imageUrl: 'https://picsum.photos/id/183/400/250',
    },
  ];

  return (
    <section className="max-w-[1400px] m-auto py-16 md:py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-left">
          <p className="text-[#001032] text-lg mb-2">Resources</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#001032] leading-tight">
            Latest <br />
            articles
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="shadow-none rounded-lg overflow-hidden border-none bg-white"
            >
              <CardHeader className="p-0">
                {article.imageUrl ? (
                  <div className="flex w-full h-48 bg-gray-200 items-center justify-center overflow-hidden rounded-t-lg">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      width={400}
                      height={250}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gray-200 rounded-t-lg"></div>
                )}
              </CardHeader>
              <CardContent className="p-4 pt-3">
                <span className="inline-block bg-gray-200 text-[#3C1D3A] text-xs font-medium px-2.5 py-0.5 rounded mb-3">
                  {article.category}
                </span>
                <CardTitle className="text-lg font-normal text-[#3C1D3A] leading-normal mb-2">
                  {article.title}
                </CardTitle>
              </CardContent>
              <CardFooter className="p-4 pt-0 text-[#3C1D3A] text-sm">
                <p>{article.date}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
