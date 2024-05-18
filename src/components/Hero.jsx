import '../styles/Hero.css'

const Hero = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center py-36"
        style={{ backgroundImage: 'url("/images/banner-bg.jpg")' }}
      >
        <div className="hero-section">
          <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
            best collection for <br /> home decoration
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam{" "}
            <br />
            accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
            odio
          </p>
          <div className="mt-12">
            <button
              className="border border-transparent text-white px-8 py-3 font-medium 
              rounded-md hover:border-2 hover:border-sky-900 hover:bg-transparent hover:text-sky-900 btn bg-sky-900"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero