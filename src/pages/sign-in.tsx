import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useForm} from "react-hook-form"

function SignIn() {
    const {register, handleSubmit} = useForm();

    function handleSignin(data: any) {
        console.log(data);
    }

    return (
        <>
        <div className="flex flex-col justify-center w-[350px] gap-4">
            <div className="flex flex-col text-center">
                <h1 className="text-xl font-semibold" >
                    Faça o seu login
                </h1>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit(handleSignin)}>
                <div className="space-y-2">
                <Label htmlFor="email">Digite o seu email</Label>
                    <Input type="email" {...register('email')} />
                </div>
                <div className="space-y-2">
                <Label htmlFor="password">Digite a sua senha</Label>
                    <Input type="password" {...register('password')}/>
                </div>
            
                <Button className="w-full">Logar</Button>
            </form>
        </div>
        </>
    )
}

export default SignIn