interface HomeWindowType {
  backgroundImage: string;
}

export default function HomeWindow({ backgroundImage }: HomeWindowType) {
  return (
    <div
      className='flex flex-col justify-center h-screen p-10 bg-center bg-no-repeat bg-cover'
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='p-2 bg-white rounded-3xl md:w-fit md:p-4'>
        <h1 className='text-4xl font-normal text-black md:text-6xl'>
          Justas <br /> Gecevicius
        </h1>
        <p className='text-lg italic font-normal text-black md:text-2xl'>
          Front-end Web Developer
        </p>
      </div>
    </div>
  );
}
