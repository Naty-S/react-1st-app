import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x:0, y: 0 })
    const { x, y } = coords;

    useEffect(() => {
        const mouseMove = (e) =>{
            const coords = { x: e.x, y: e.y };
            setCoords( coords );
        }
        window.addEventListener('mousemove', mouseMove );
        
        // cuando el componente se desmonta/deja de existir, para limpieza, eficiencia de mem
        // Man remuevelo porque se crea uno cada vez que se monta el componente
        return () => {window.removeEventListener('mousemove', mouseMove );}
    }, [])

    return (
        <div>
            <h3>Eres genial!</h3>
            <p>
                x:{ x } y: { y }
            </p>
        </div>
    )
}
