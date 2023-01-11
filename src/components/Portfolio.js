import React from "react";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="section">
        <div className="section-header">
          <p className="title">“Evergreen” (Short Film Score, 2022) </p>
          <p className="album-info">Score composer, recording engineer </p>
        </div>
        <div className="media-container">
          <iframe
            className="bandcamp"
            height="360px"
            title="bandcamp-player"
            frameBorder="0"
            src="https://bandcamp.com/EmbeddedPlayer/album=3396749703/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://nicklanyon.bandcamp.com/album/evergreen-score">
              Evergreen Score by Nick Lanyon
            </a>
          </iframe>
          <iframe
            className="vimeo"
            title="vimeo-player"
            src="https://player.vimeo.com/video/711412436?h=1ba67a7e34"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="section">
        <div className="section-header">
          <p className="title">
            Rapallo, <span>You Were Born to Drive This Car</span> (EP, 2022)
          </p>
          <p className="album-info">
            Songwriter and arranger, producer, recording engineer, performer
            (guitar, bass, vocals, synthesizer)
          </p>
        </div>
        <div className="media-container">
          <iframe
            className="bandcamp"
            height="270px"
            title="bancamp-player"
            frameBorder="0"
            src="https://bandcamp.com/EmbeddedPlayer/album=3451218775/size=large/bgcol=ffffff/linkcol=333333/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://rapallo1.bandcamp.com/album/you-were-born-to-drive-this-car">
              You Were Born to Drive This Car by Rapallo
            </a>
          </iframe>
        </div>
      </div>
      <div className="section">
        <div className="section-header">
          <p className="title">
            Rapallo, “Fine Living” (Single, 2020 via{" "}
            <span>Nice Guys Records</span>)
          </p>
          <p className="album-info">
            Songwriter and arranger, producer, recording engineer, performer
            (guitar, bass, vocals, drum programming, synthesizer)
          </p>
        </div>
        <div className="media-container">
          <iframe
            className="bandcamp"
            height="120px"
            title="bancamp-player"
            frameBorder="0"
            src="https://bandcamp.com/EmbeddedPlayer/track=41079262/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://niceguysweare.bandcamp.com/track/fine-living">
              Fine Living by Rapallo
            </a>
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
