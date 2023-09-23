import { useState } from "react"

export function useFavoritos(filme) {
    const [favorito, setFavorito] = useState(false)

    function favoritar() {
        setFavorito(!favorito)
        saveOnLocalStorage(!favorito)
    }

    function saveOnLocalStorage(favorito) {
        const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []

        if (favorito) {
            favoritos.push(filme)
            localStorage.setItem("favoritos", JSON.stringify(favoritos))
        } else {
            const removeFavoritos = favoritos.filter(f => f.titulo !== filme.titulo)
            localStorage.setItem("favoritos", JSON.stringify(removeFavoritos))
        }
        
    }

    function carregarFavoritos() {
        const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
        const favorito = favoritos.find(f => f.titulo === filme.titulo)
        setFavorito(favorito)
    }

    return {favorito, favoritar, carregarFavoritos}
}