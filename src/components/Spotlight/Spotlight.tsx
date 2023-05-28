import { SpotlightFeature } from "./SpotlightFeature";

interface Props {
  title: string;
  features: {
    title: string;
    body: string;
    image: string;
  }[];
}

export const Spotlight = ({ title, features }: Props) => {
  return (
    <div className="bg-neutral text-neutral-content py-32 md:py-44 px-10 block">
      <h3 className="text-center text-3xl mb-24 text-primary">{title}</h3>
      <div className="flex gap-12 justify-center flex-wrap">
        {features.map((feature, index) => (
          <SpotlightFeature
            key={index}
            title={feature.title}
            body={feature.body}
            image={{
              alt: feature.title,
              src: feature.image,
            }}
          />
        ))}
      </div>
    </div>
  );
};
