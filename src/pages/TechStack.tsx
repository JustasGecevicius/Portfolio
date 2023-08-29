import ThreeD from './3D';

export default function TechStack() {
  return (
    <div className='flex flex-col items-center justify-start w-screen h-screen p-5'>
      <h2 className='text-3xl font-bold max-w-prose'>Tech</h2>
      <div className='flex flex-row flex-wrap justify-center w-screen grow'>
        <ThreeD />
      </div>
    </div>
  );
}
