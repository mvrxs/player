// Player.jsx
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import ListFile from './ListFile';
import data from '../data/data.json';

export default function Player() {
    const [currentFile, setCurrentFile] = useState(null);

    const handleFileClick = (fileName) => {
        const isSong = fileName.endsWith('.mp3');
        const isVideo = fileName.endsWith('.mp4') || fileName.endsWith('.webm');

        let fileUrl = null;
        if (isSong) {
            fileUrl = `/assets/media/canciones/${fileName}`;
        } else if (isVideo) {
            fileUrl = `/assets/media/videos/${fileName}`;
        }

        setCurrentFile(fileUrl);
    };

    return (
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
            <div className='flex justify-center items-center h-screen'>
                <div className="flex justify-center h-4/6 items-center w-5/6 ">
                    <div className='text-white text-4xl text-center h-full w-2/5 mr-2 bg-indigo-950 rounded-lg shadow-2xl'>
                        <div className='align-middle mt-4 pb-6'>
                            ....
                        </div>
                        <div className='flex flex-col items-center'>
                            <ListFile files={data.canciones} fileType="song" onFileClick={handleFileClick} />
                            <ListFile files={data.videos} fileType="video" onFileClick={handleFileClick} />
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden h-full w-full shadow-2xl">
                        <ReactPlayer
                            url={currentFile}
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
