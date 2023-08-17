interface HomeWindowType {
  backgroundImage: string;
}

export default function HomeWindow({ backgroundImage }: HomeWindowType) {
  return (
    <div
      className='flex flex-col justify-center h-screen p-5 bg-center bg-no-repeat bg-cover md:p-10 backgroundShadow'
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className='text-4xl font-extrabold text-white md:text-8xl md:font-extrabold md:w-fit'>
        Hi, I'm <p className='md:inline-block text-shadow text-blue'>Justas</p>
      </h1>
      <p className='relative text-lg text-white md:text-4xl top-16'>
        A Front-end Web Developer
      </p>
    </div>
  );
}
