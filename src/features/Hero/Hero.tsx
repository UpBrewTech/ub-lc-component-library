interface Props {
  heading: string;
  body: string;
  companyName: string;
  onClick?: VoidFunction;
  heroImage: string;
}

export const Hero = ({
  heading,
  body,
  companyName,
  onClick,
  heroImage,
}: Props) => {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url("${heroImage}")`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className='hero-overlay bg-opacity-80'></div>
      <div className='hero-content text-center md:text-left text-primary-content'>
        <div className='w-[80vw]'>
          <div className='max-w-xl'>
            <h1 className='text-2xl mb-4 text-secondary font-semibold'>
              {companyName}
            </h1>

            <h2 className='mb-5 text-5xl font-bold'>{heading}</h2>
            <p className='mb-5'>{body}</p>
            <button onClick={onClick} className='btn btn-primary'>
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
