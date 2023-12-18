// DownloadAppsPage.js
import React from 'react';
import embyTv from '../assets/embyTv.png'
import HdoTv from '../assets/Hdo-TV.png'
import HudoBox from '../assets/hdoBox.png'
import Mediaon from '../assets/media-on.png';
import Microg from '../assets/microg.jpg';
import Youtube from '../assets/Youtube.jpg';
import bg from '../assets/bg.jpg'




const appData = [
  {
    id: 1,
    name: 'EmbyTv',
    imageUrl: embyTv,
    downloadLink: 'https://drive.google.com/file/d/1nffFDnAtCqx4_MSGA_LAZyzz_qwwJaV6/view?fbclid=IwAR2Zs8HuRcYdzPPtSXvmZdzZzjqW0Gd6_MwvVecLpuKTZ2AMSWAaPCgORuk',
  },
  {
    id: 2,
    name: 'HdoTv',
    imageUrl: HdoTv, 
    downloadLink: 'https://drive.google.com/file/d/1hsUSWrE6iMiDPefA6VGuK3cN_thLnpOe/view?fbclid=IwAR2xMI80PHGlml39t3B6do1ra9nVdZYluitVmH-YdhUeCYjDLCxzdb_8NbE',
  },
  {
    id: 3,
    name: 'HudoBox',
    imageUrl: HudoBox, 
    downloadLink: 'https://drive.google.com/file/d/1plivMVUXkDDpJ9Esyq_90e3Rk_e-xe0g/view?fbclid=IwAR01nx05ViyRqoh_i_SQOCUQxepNi31QmljiFzIRWdfHdMk6h8exkwInRcU',
  },
  {
    id: 4,
    name: 'Mediaon',
    imageUrl: Mediaon, 
    downloadLink: 'https://drive.google.com/file/d/14CLCfb1eoPKeq92nL1xjReMl-JN3MSs_/view?fbclid=IwAR1eYMCuNrB7bWJ2OTITZQWSW5FSuiq2EVxJwXMN5UAblbMIndjKf0wnNDM',
  },
  {
    id: 5,
    name: 'Microg',
    imageUrl: Microg, 
    downloadLink: 'https://drive.google.com/file/d/1gBTP9DzqatmXMYzQdB61awPVg5Wawnt0/view?fbclid=IwAR1LxvmyQu6NzNlr2igHEKiRiiJyteQoxnFKXZ7y7NLsXAN1bwJ1ss_BqMk',
  },
  {
    id: 6,
    name: 'Youtube',
    imageUrl: Youtube, 
    downloadLink: 'https://drive.google.com/file/d/1wwn-dNPhWJxoRAtjTBVJ27juytnlgN05/view?fbclid=IwAR31P9a7CG7G4J0MUgztmKXyLOTO9Oc9fZA_FTE9VPlljMQJHELCdN8UJhU',
  },
  
];

const DownloadAppsPage = () => {
  return (
    <div className="min-h-screen bg-cover mx-auto p-4"
    style={{ backgroundImage: `url(${bg})` }}
    >
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {appData.map((app) => (
          <AppCard key={app.id} {...app} />
        ))}
      </div>
    </div>
  );
};

const AppCard = ({ name, imageUrl, downloadLink }) => {
  return (
    <div className="bg-transparent  p-4 shadow-md rounded-md">
      <img  src={imageUrl} alt={name} className="w-full h-42 rounded-md object-cover mb-4" />
      <h2 className="text-rose-400 text-6xl  font-semibold mb-2">{name}</h2>
      <button > <a
        href={downloadLink}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-2xl text-rose-700 hover:underline"
      >
        Download
      </a></button>
     
    </div>
  );
};

export default DownloadAppsPage;

