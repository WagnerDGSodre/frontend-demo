import { useState } from "react"

import InputFormAuth from "../components/theme/InputFormAuth"
import UseAuth from "../datas/hook/UseAuth"

interface propsAuthentication {
  text: string,
  children?: any
}
export default function Autenticacao(props: propsAuthentication) {
  const [mode, setMode] = useState<'login' | 'cadastro'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { cadastrar, login, loginGoogle } = UseAuth()

  const msgError = (msg, count = 5): void => {
    setError(msg)
    setTimeout(() => setError(null), count * 1000)
  }


  async function submeter() {
    try {
      if (mode === 'login') {
        setMode('login')
        await login(email, password)
      } else {
        await cadastrar(email, password)
        setMode('cadastro')
        msgError('Ocoreu um erro')
      }

    } catch (e) {
      msgError(e?.message ?? 'Erro desconhecido')
    }




  }

  return (
    <div className={`flex h-screen items-center justify-center`}>
      <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
        <img src="https://www.philips.com.br/c-dam/b2bhc/br/resource-catalog/landing/tasy_category/tasy-hospital-cases-L.jpg"
          alt="Imagens "
          className={`h-screen object-cover w-full`}
        />
      </div>

      <div className={` shadow-l-3 m-10 flex-end w-full md:w-1/2 lg:w-1/3  `}>
        {error === null ? '' : (
          <div>

            <p className={`text-red-500 p-2 border border-red-500`}>Ocorreu um erro!</p>
          </div>
        )}
    
        <div className={` shadow-l-3 m-10 flex-end w-full md:w-1/2 lg:w-1/3  `}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAyCAYAAADbYdBlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2NDYzOTVlYy04OTdlLTQzZTAtOTY1OS1lYzZhNDljZjFlNDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REY5QzE2RkU1MjJGMTFFOUI5NTRGQzkzNEVCRkRDQjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REY5QzE2RkQ1MjJGMTFFOUI5NTRGQzkzNEVCRkRDQjQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjQ2Mzk1ZWMtODk3ZS00M2UwLTk2NTktZWM2YTQ5Y2YxZTQ5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY0NjM5NWVjLTg5N2UtNDNlMC05NjU5LWVjNmE0OWNmMWU0OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjL2xU4AAATYSURBVHja7JxvTBt1GMef0lJabZljQ8dkHcKcMzOizLG5uBcmZppFTdAskagxmrj4Rol7ARiYe6EjaEzUhMWMzKBvNGokbCMZARRiBtkMbJKogzA6LrgyoWnXDtrr9dr6u8thaovdQQst1+8nedKmv17a59dvv8/vuX+6CIPAWkCnxaRy8LsCCBBAgABAgAACBAACBBAgABAggAABgAABBAgABAggQAAgQKAZDGreZHltdNHXzUYdWc162rbJSLtLTVRVmU+PscfbbTv39Q5VnxH9vmTHk/0stfkucHmSp1M/36SBMR9Nu0X5ZKoHNxtpV6mZ9mwz074HzFRckAsBJrOxX4iwEGnGI9Igm+jPz7nomXILnXyziDZY9ZqbLLX5ftjupI/OOCn2TMshOy/HyV53wj8ISnASdI3M0YEmjub5cFZMYGy+Z4ZuUfPpePGBFDug9O/lgxG6fI2nt7+6QaPXA/+OjTkE+oy5Q0PVRs1MlNp8T3S747btadhK5SV55AtEaHxaoF9GfdR+0Qv1JeuAplwdPb7dTJ+8cnfc2GnmBFpDTb4jHB83Jm1zhzGHNrIyLT2ve34DXTx+H9SXqhL80Jb4hfjVG4JmJy1RvuFFVh6XrvFQ2ko0IQvwwaWt9/6vy1wrJMq3gnXF51mJjebAcY6e22Wlg49a6Mmdd8pOCFLogKPX491uZ3GeZictUb7HXiykPIMuRrAR+uGCl17/wkFl74zToU//oitRa0gIcJkExAhdGPdT3Td/x40d2puvuclSk6+0xvvp6FZ6utxC+kVmN8TM89xvc/TE+5PyrhyU4GWSqIw+bDPR4afWJ+wo11pZXkq+j5SY6McjxTTrDVH/n/PUxQR3dniOfEL4P2I++v2sLFY4YAp5tsJCnXVb5I4xG0iUb2G+XnbGL9/aTN0NtrjxxTpmOOBSncGUQyWFufLhpZf2rZNLkJZZbr7S4btY9Dk6CHC5G2bbYSS1+e4/NklVlVbaywRaeo9R7nilJuSDdmfce/fcb4YANe1WMeu2Hffm0VDTyu4Alk5CkOJ26Jj5vXuwAF1wNiX7wm5rRnwP6ayaE28UyfsE4YDZJMDKlRfgyMel8m6Wvj989PsUTzOekOx2BRY9bS8yyqJ7df862nSXgQCrBLg9W+YjiqLPYDBo0i5xRvTaEOA81oAgbfj9/mkIEKQNt9tthwBB2uA47lcIEKQF1iOGWltbe9AFg7QwNTXVb7PZXmY/kwMOCFbdADs6OtrYo2a7YDhgBmO323vKysoOs6cO9jNp8hoHOGCG4vf7XTU1NU1SE8wiiCYErBrBYNDf0tLyXmdn55hSfiMQIFgVBEGYb25uPlJbW9utuJ+o5XxxRDyDcDqdE0x4DW1tbdJ+vxkWmr9yCQLMAERR5AcHB7+rrq4+5XA4OEmLLHgtl14IMAMIBAKe4eHhrsbGxm/7+vquKq7nUZqOrNg7AQGufnd7k+O4SwMDA+fr6+v7WdmdZS+7WEg3i/GzCGXTfECAKSYcDgdZSRWYu3mZ2G55PJ4Zl8s1PTExYe/t7b3C1nd2pbP1KuFTyq2YjfMlXZZVwWI9pJMSIlEhKiGVU0ER2UIElJDGVN3XRKvHC3SK+HCrztQLMRwVoSgxhqOPPul06i7N1KoA/xFgAL1zGgzdfVSGAAAAAElFTkSuQmCC"
            alt="Philips" className={`flex item-center `} /> 
        </div>

        <h1 className={`font-semibold mb-5`}>
          {mode === 'login' ? "Entre com seu email e senha" : "Cadastre-se no Sistema"}</h1>


        <InputFormAuth
          label="Email"
          type='text'
          value={email}
          changeValue={setEmail}
          required
        />
        <InputFormAuth
          label="Password"
          type="password"
          value={password}
          changeValue={setPassword}
          required
        />

        <InputFormAuth
          label="Confirm Password"
          type="password"
          value={password}
          changeValue={setPassword}
          required
          modeRender={false}
        />

        <button onClick={submeter}
          className={`w-full text-white bg-slate-400 mt-6 my-4 py-3  rounded-lg 
         hover:bg-slate-900 hover:text-white   ` }>
          {mode == "login" ? "Entrar" : "Cadastrar"}
        </button>

        <hr className={`my-6 w-full border-gray-300`} />

        <button onClick={loginGoogle}
          className={`w-full text-white bg-gradient-to-br from-red-400 to-red-800 my-4 py-3  rounded-lg 
         hover:bg-gradient-to-br hover:from-red-600 hover:to-red-900 hover:text-white   ` }>
          Entre com sua conta do Google
        </button>

        {mode === 'cadastro' ? (
          <div className={`mt-8`}>
            Já possui uma conta ?
            <a onClick={() => setMode('login')}
              className={`cursor-pointer font-semibold text-gray-700`}
            > Entre com as suas credenciais </a>
          </div>


        ) : (
          <div className={`mt-8`}>
            Novo na plataforma ?
            <a onClick={() => setMode('cadastro')}
              className={`cursor-pointer font-semibold text-gray-700`}
            > Crie sua conta agora</a>
          </div>
        )


        }


      </div>
    </div>


  )
}