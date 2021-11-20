import React from 'react'

const PreLoader=()=> {
        let mystls={height:'150px'}
        return (
            <div className="text-center">
                <img style={mystls} src="https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif" alt="Preloader" />
            </div>
        )
    
}

export default PreLoader;
