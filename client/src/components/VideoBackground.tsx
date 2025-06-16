// import React from 'react';

// interface VideoBackgroundProps {
//   url?: string;
//   overlay?: boolean;
// }

// export default function VideoBackground({ url, overlay = true }: VideoBackgroundProps) {
//   // const defaultVideo = "https://cdn.pixabay.com/vimeo/536080864/abstract-56673.mp4?width=1280&hash=f1ad5f1d7fde3cd9f0d6f4e9e4c2aec3c3d0c1e7";
  
//   return (
//     <>
//       {overlay && (
//         <div className="video-overlay animate-pulse-slow" />
//       )}
//       <div className="circuit-pattern" />
//       <div className="robot-grid" />
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="video-background"
//       >
//         <source src={url || defaultVideo} type="video/mp4" />
//       </video>
//     </>
//   );
// }