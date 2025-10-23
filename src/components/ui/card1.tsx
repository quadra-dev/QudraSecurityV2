import * as React from "react";

export type CardProps = React.HTMLAttributes<HTMLDivElement>; 

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow ${className}`}
      {...props}
    />
  );
}
export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export function CardContent({ className = "", ...props }: CardContentProps) {
  return <div className={`p-4 ${className}`} {...props} />;
}
