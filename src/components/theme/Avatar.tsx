import useAuth from "../../datas/hook/UseAuth"
import Image from "next/image"



interface AvatarProps {
    className?: string
    src?: any

}

export default function Avatar(props: AvatarProps) {
    const { usuario } = useAuth()
    return (
        <>          
            <Image alt="image"
             src={usuario?.imagemUrl ?? '/images/avatar.svg'}
                          className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${props.className}
                `}
                />
        </>

    )
}