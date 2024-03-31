// ListFile.jsx
import React from 'react';

export default function ListFile({ files, fileType, onFileClick }) {
    return (
        <div className="flex flex-col items-center w-full sm:w-auto">
            {files.map((file, index) => (
                <div key={index} className="bg-indigo-400 text-sm sm:text-base mb-1 sm:w-full h-16 rounded cursor-pointer" onClick={() => onFileClick(file.archivo)}>
                    <p className="flex items-center justify-center h-full">
                        {fileType === 'song' ? `${file.titulo} - ${file.artista} - ${file.duracion} - ${file.genero}` : `${file.titulo} - ${file.director} - ${file.duracion} - ${file.genero}`}
                    </p>
                </div>
            ))}
        </div>
    );
}
