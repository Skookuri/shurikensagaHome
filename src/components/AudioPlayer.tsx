import React from "react";

interface AudioPlayerProps {
  audioSrc: string; // Path or URL to the audio file
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc }) => {
  // Determine the MIME type based on the file extension
  const getMimeType = (file: string) => {
    if (file.endsWith(".wav")) return "audio/wav";
    if (file.endsWith(".mp3")) return "audio/mpeg";
    return ""; // Default fallback
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <audio controls>
        <source src={audioSrc} type={getMimeType(audioSrc)} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
