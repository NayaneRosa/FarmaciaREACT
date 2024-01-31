// import homeLogo from '../../assets/home.png'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-[#b51c85] flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Farmacia NR - Os melhores Produtos Estão Aqui</p>
  
              <div className="flex justify-around gap-4">
              
              </div>
            </div>
  
            <div className="flex justify-center ">
              {/* <img src={homeLogo} alt="" className='w-2/3' /> */}
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;