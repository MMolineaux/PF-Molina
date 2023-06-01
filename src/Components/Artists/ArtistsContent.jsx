import React from "react";
import "../Artists/ArtistsContent.css";

const ArtistsContent = () => {
  const imageURL =
    "https://live.staticflickr.com/65535/52942281659_2aa9ca6dd8_z.jpg";

  return (
    <div className="ft-artists">
      <h1>There is only one artist</h1>

      <div className="artist-card">
        <div className="artist-card-pfp">
          <img src={imageURL} className="artist-card-img" alt="Artist" />
        </div>
        <div className="artist-card-text-container">
          <p className="artist-card-text">
            DALL·E, developed by OpenAI, is a neural network model that
            generates images based on textual descriptions. It leverages the
            achievements of GPT-3 and is trained on a vast dataset of text and
            images. By understanding textual prompts, DALL·E can produce
            visually appealing and innovative images that align with the given
            descriptions. This showcases the immense potential of AI in the
            realms of visual creativity and design.
          </p>
        </div>
      </div>
      <p className="ai-outro">
        Artificial intelligence (AI) is the hottest trend in technology,
        revolutionizing industries and transforming the way we live. With its
        ability to analyze data, make complex decisions, and mimic human
        behavior, AI is being applied in healthcare, transportation, finance,
        and consumer technology. Its integration into various aspects of our
        lives is only growing, solidifying its position as a transformative
        force that is here to stay. That is why all this art is made by Dall-e.
      </p>
    </div>
  );
};

export default ArtistsContent;
