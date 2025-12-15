import { Link } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import PlantCard from '../Components/PlantCard';
import Plants from "../data/plants"
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Background image section */}
      <div className="relative mt-16 w-full h-[500px]">
        <img
          src="./assets/Images/bg2.png"
          alt="Virtual Herbal Garden"
          className="w-full h-full object-fill"
        />

        {/* Overlay text: mobile center, desktop same as original */}
        <div className="absolute inset-0 flex flex-col justify-center items-center md:justify-start md:items-start text-center md:text-left px-4 md:px-0">
          <h1 className="mt-10 font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-green-950 md:pt-10 md:pr-120 md:pl-22 mb-6">
            Welcome to the Virtual Herbal Garden
          </h1>
          <p className="text-xl sm:text-2xl text-white mt-4 md:mt-0 md:pl-23 md:pr-140">
            Explore the Healing properties of Medical Plants in a serene Digital Garden
          </p>
        </div>
      </div>

      {/* plant card components */}
      <div className='mt-9 px-4 md:px-23 mb-9'>
        <h3 className='font-bold text-2xl pb-7 text-center md:text-left'>Featured Plants</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Plants.slice(0,4).map((plant) => (
            <PlantCard key={plant.id} plant={plant}/>
          ))}
        </div>
      </div>   

      <div className='flex flex-col md:flex-row mb-9 px-4 md:px-16 gap-5'>
        <div className='w-full md:w-auto md:ml-8 md:mr-5'>
          <h3 className='text-2xl font-bold pb-6 text-center md:text-left'>About</h3>
          <div className='bg-green-300 rounded-2xl overflow-hidden'>
            <img className='h-70 w-[500px] object-cover' src="./assets/Images/About image.jpg" alt="Image" />
          </div>
        </div>
        <div className='flex-1 md:mt-13 text-lg text-green-900 text-center md:text-left'>
          <p className='leading-8 mr-5'>
            Virtual Herbal Garden is a digital platform blending traditional herbal knowledge with modern technology, offering 3D plant models, scientific insights, and interactive learning features for students, researchers, and health enthusiasts. The platform serves as a bridge between ancient wisdom and modern science, helping users explore the medicinal value, growth patterns, and therapeutic applications of various herbs.Along with detailed plant information.
          </p>
          <button className='text-sm mt-6 rounded-lg w-60 h-9 font-bold bg-gray-100 hover:bg-green-800 hover:text-white'>
            <Link to={"/About"}>Learn More About Our Vision</Link>
          </button>
        </div>
      </div>

      <Footer/>
    </>
  );
}
