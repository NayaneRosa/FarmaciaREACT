// import Logo from ''
import { Link } from 'react-router-dom';

function Navbar() {
    
    return (
        <>
        <div className='w-full bg-[#b51c85] text-white flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
                <div className='text-2xl font-bold uppercase'> 
                <Link to='/home' className='text-2xl font-bold uppercase'>Farmacia NR</Link>
                <Link to="/">
                    {/* <img src={Logo} alt="" width="200" /> */}
                </Link>
                </div>
                <div className='flex gap-4'>
                    <Link to='/categorias' className='hover:underline'>Categorias</Link>
                    <Link to='/cadastrarCategoria' className='hover:underline'>Cadastrar categoria</Link>
            </div>
            </div>
            </div>
        </>
    )
    }

    export default Navbar