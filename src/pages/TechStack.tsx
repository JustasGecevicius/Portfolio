import mongo from '../assets/mongo.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import redux from '../assets/redux.png';
import ThreeD from './3D';

export default function TechStack() {
  const objectArray = [mongo, react, node, redux];

  return (
    <div className='flex flex-col items-center justify-start w-screen h-screen p-5'>
      <h2 className='text-3xl font-bold max-w-prose'>Tech</h2>
      <div className='flex flex-row flex-wrap justify-center w-screen h-screen'>
        {objectArray.map((object) => (
          <ThreeD image={object} />
        ))}
      </div>
    </div>
  );
}
