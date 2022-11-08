import route from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import firebase from '../../firebase/config'
import Usuario from '../../model/Usuario'

interface AuthContextProps {
    usuario?: Usuario
    carregando?: boolean
    cadastrar?: (email: string, password: string) => Promise<void>
    login?: (email: string, password: string) => Promise<void>
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL
    }
}

function gerenciarCookies(logado: boolean) {

    if (logado) {
        Cookies.set('admin-phLabs', 'true', {
            expires: 7
        })
    } else {
        Cookies.remove('admin-phLabs')
    }
}



export function AuthProvider(props) {
    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<Usuario>(null)

    async function configurarSessao(usuarioFirebase) {
        if (usuarioFirebase?.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookies(true)
            setCarregando(false)
            return usuario.email
        } else {
            setUsuario(null)
            gerenciarCookies(false)
            setCarregando(false)
            return false
        }
    }


    async function login(email, password) {
        try {
            setCarregando(true)
            const resp = await firebase.auth()
            .signInWithEmailAndPassword(email,password)
          
            await configurarSessao(resp.user)
            route.push('/')
        } finally {
            setCarregando(false)
        }
    }

    async function cadastrar(email, password) {
        try {
            setCarregando(true)
            const resp = await firebase.auth()
            .createUserWithEmailAndPassword(email,password)
          
            await configurarSessao(resp.user)
            route.push('/')
        } finally {
            setCarregando(false)
        }
    }

    async function loginGoogle() {
        try {
            setCarregando(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            await configurarSessao(resp.user)
            route.push('/')
        } finally {
            setCarregando(false)
        }
    }


    async function logout() {
        try {
            setCarregando(true)
            await firebase.auth().signOut()
            await configurarSessao(null)
            route.push('/autenticacao')
        } finally {
            setCarregando(false)
        }
    }


    useEffect(() => {
        if (Cookies.get('admin-phLabs')) {
            const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
            return () => cancelar()
        }
    }, [])



    return (
        <AuthContext.Provider value={{
            usuario,
            carregando,
            login,
            cadastrar,
            loginGoogle,
            logout

        }}>
            {props.children}

        </AuthContext.Provider>
    )
}

export default AuthContext