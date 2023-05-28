interface Props {
  heading: string;
  body: string;
}

export const Hero = ({ heading, body }: Props) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1>{heading}</h1>
        <h2>{body}</h2>
      </div>
    </div>
  );
};
