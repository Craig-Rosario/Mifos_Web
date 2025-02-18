import mainImg from '@/assets/images/cover_image.jpg';
import LoginCard from '@/ShadCN/mycomponents/LoginCard';

const Login = () => {
    return (
        <div className="flex w-screen h-screen">
            <div className="relative w-[70%] h-full">
                <img src={mainImg} alt="" className="absolute w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="absolute inset-0 flex flex-col justify-center text-white z-10 px-16">
                    <h1 className="text-6xl font-bold mb-4">Mifos X</h1>
                    <p className="text-2xl min-w-[75%]">
                        Mifos X is designed by the Mifos Initiative. A global community that aims to speed the elimination of poverty by enabling Organizations to more effectively and efficiently deliver responsible financial services to the world's poor and unbanked. Sounds interesting? Get involved!
                    </p>
                </div>
            </div>

            <div className="w-[30%] h-full bg-white flex flex-col">
                <div className="w-[100%] overflow-y-hidden">
                    <LoginCard />
                </div>
            </div>
        </div>
    );
};

export default Login;
