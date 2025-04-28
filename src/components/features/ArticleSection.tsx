import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

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
      category: 'Invest',
      title: 'The State of U.S. Early-Stage Venture & Startups: 2025',
      author: 'PTWO',
      date: 'April 1, 2025',
      imageUrl: 'https://picsum.photos/id/180/800/600',
    },
    {
      id: 2,
      category: 'Invest',
      title: 'The State of U.S. Early-Stage Venture & Startups: 2025',
      author: 'PTWO',
      date: 'April 1, 2025',
      imageUrl: 'https://picsum.photos/id/181/800/600',
    },
    {
      id: 3,
      category: 'Invest',
      title: 'The State of U.S. Early-Stage Venture & Startups: 2025',
      author: 'PTWO',
      date: 'April 1, 2025',
      imageUrl: 'https://picsum.photos/id/182/800/600',
    },
    {
      id: 4,
      category: 'Invest',
      title: 'The State of U.S. Early-Stage Venture & Startups: 2025',
      author: 'PTWO',
      date: 'April 1, 2025',
      imageUrl: 'https://picsum.photos/id/182/800/600',
    },
  ];

  return (
    <section className="w-full px-12 py-12 mx-auto lg-p-12 bg-primary-50">
      <div className="mb-2 text-sm font-medium text-primary-600">Resources</div>
      <h2 className="mb-8 text-3xl font-bold md:text-4xl text-primary-950">
        Latest articles
      </h2>

      <div className="grid grid-cols-1 gap-8 w-fit md:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => (
          <Card
            key={article.id}
            hoverEffect={true}
            className="flex flex-col h-full"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader>
              <div className="mb-1 text-sm font-medium text-primary-500">
                {article.category}
              </div>
              <CardTitle className="text-xl text-primary-950">
                {article.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter className="pt-4 border-t border-primary-100">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-200">
                  <span className="text-xs font-bold text-primary-700">
                    {article.author.charAt(0)}
                  </span>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-primary-700">{article.author}</p>
                  <p className="text-xs text-primary-400">{article.date}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
