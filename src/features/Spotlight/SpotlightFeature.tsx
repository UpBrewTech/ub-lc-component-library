interface Props {
  title: string;
  body: string;
  image: {
    src: string;
    alt: string;
  };
}

export const SpotlightFeature = ({ title, image, body }: Props) => {
  return (
    <div className='card card-compact w-96 bg-base-100 shadow-xl'>
      <figure>
        <img
          className='w-full h-80 object-cover'
          src={image.src}
          alt={image.alt}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};
