Static assets used by the Remix app

- CSS files included via route-level links():
  - /assets/common.css
  - /assets/home-screen-125-171.css

- Client behavior script:
  - /assets/app.js

- Image assets for the Home screen:
  - /images/figma_image_125_190_8_12.png
  - /images/figma_image_125_191.png
  - /images/figma_image_125_192_115_19.png
  - /images/figma_image_125_188_8_9.png

Notes:
- Files in this directory are served statically by Remix at their absolute paths (/assets/*, /images/*).
- Do not import these in the bundler; reference them via absolute URLs from JSX or links().
