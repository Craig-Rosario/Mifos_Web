import { Button } from "@/components/ui/button"
import  {useNavigate} from "react-router-dom"
const LoginBtn = () => {
  const navigate = useNavigate();
  const handleLogin=()=>{
    navigate("/home ");
  }
  return (
    <div>
      <Button variant="outline" onClick={handleLogin} className='hover:bg-blue-500 hover:text-white w-45 cursor-pointer'>Login</Button>
    </div>
  )
}

export default LoginBtn
