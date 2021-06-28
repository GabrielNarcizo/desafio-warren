import React, { useState } from 'react'
import { Div, Progress, ProgressDone } from './ProgressBar.style';

const ProgressBar = ({done}) => {
    const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
        <>
            <Div>
                <div>
                <p>Solicitada</p>
                <p>Processando</p>
                <p>Concluída</p>
                </div>
            <Progress>
                <ProgressDone done={done} style={style}>
                </ProgressDone>
            </ Progress>
            </Div>
        </>
	)
}

export default ProgressBar
