import React from 'react';
import { Card, CardContent, CardHeader } from './card';
import AuthHeader from './auth-header';

interface CardWrapperPorps {
  title: string;
  label: string;
  backButtonHref: string;
  backButtonLabel: string;
  children: React.ReactNode;
}

const CardWrapper = ({ label, title, children }: CardWrapperPorps) => {
  return (
    <Card className="xl:w-1/4 md:w-1/2 shadow-md">
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardWrapper;
