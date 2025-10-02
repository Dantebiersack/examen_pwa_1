import { ReactNode } from "react";

type CardProps = {
  id: number | string;
  title: string;
  imgUrl?: string;
  imgAlt?: string;
  children?: ReactNode;
};

export default function Card({ title, imgUrl, imgAlt, children }: CardProps) {
  return (
    <div className="card h-100 shadow-sm">
      {imgUrl && (
        <div className="ratio ratio-4x3">
          <img
            src={imgUrl}
            alt={imgAlt ?? title}
            className="card-img-top object-fit-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {children && <div className="card-text">{children}</div>}
      </div>
    </div>
  );
}
