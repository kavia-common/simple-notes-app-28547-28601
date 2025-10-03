import { useEffect } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { useLocation } from "@remix-run/react";

/**
 * PUBLIC_INTERFACE
 * links: Attach screen-specific stylesheets for the Home screen.
 */
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "/assets/common.css" },
  { rel: "stylesheet", href: "/assets/home-screen-125-171.css" },
];

/**
 * PUBLIC_INTERFACE
 * meta: Basic metadata for the Home screen.
 */
export const meta: MetaFunction = () => {
  return [
    { title: "Notes - Home" },
    { name: "description", content: "Home screen for the Notes application." },
  ];
};

export default function Index() {
  const location = useLocation();

  // Load minimal behavior from /assets/app.js on the client only.
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/app.js";
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [location.key]);

  // JSX translation of assets/home-screen-125-171.html
  return (
    <div className="screen-host">
      {/* Root frame */}
      <main id="home-screen-125-171" className="frame" role="main" aria-label="Home Screen">
        {/* Hero Text */}
        <h1 className="node node-125-186" aria-label="Title">Notes</h1>

        {/* Button 4 (search container) */}
        <button className="node node-125-189" aria-label="Open search" type="button">
          <span className="visually-hidden">Search</span>
        </button>
        {/* search icon image on top of button */}
        <img
          className="node node-125-190"
          src="/images/figma_image_125_190_8_12.png"
          alt="Search icon"
          width={24}
          height={24}
        />

        {/* Button 1 (info) */}
        <button className="node node-125-187" aria-label="Information" type="button">
          <span className="visually-hidden">Info</span>
        </button>
        {/* info_outline icon */}
        <img
          className="node node-125-188"
          src="/images/figma_image_125_188_8_9.png"
          alt="Info icon"
          width={24}
          height={24}
        />

        {/* Cards and texts */}
        <section className="node node-125-175" aria-label="Card: Book review" />
        <p className="node node-125-176">
          Book Review : The Design of Everyday Things by Don Norman
        </p>
        {/* spacer to preserve layout */}
        <div className="node node-125-177" aria-hidden="true" />

        <section className="node node-125-178" aria-label="Card: Animes produced by Ufotable" />
        <p className="node node-125-179">Animes produced by Ufotable</p>

        <section className="node node-125-180" aria-label="Card: Mangas planned to read" />
        <p className="node node-125-181">Mangas planned to read</p>

        <section className="node node-136-37" aria-label="Card: Awesome tweets collection" />
        <p className="node node-136-39">Awesome tweets collection</p>

        <section className="node node-136-38" aria-label="Card: List of free &amp; open source apps" />
        <p className="node node-136-40">List of free &amp; open source apps</p>

        {/* Floating Add Button (ellipse + plus icon) */}
        <div
          className="node node-125-191"
          role="button"
          tabIndex={0}
          aria-label="Create new note"
          onClick={() => {
            // Placeholder: navigate or open modal to create new note
            console.log("Add new note clicked");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              (e.currentTarget as HTMLDivElement).click();
            }
          }}
        >
          <img
            src="/images/figma_image_125_191.png"
            alt=""
            aria-hidden="true"
            width={70}
            height={70}
          />
        </div>
        <img
          className="node node-125-192"
          src="/images/figma_image_125_192_115_19.png"
          alt="Add"
          width={28}
          height={28}
        />
      </main>
    </div>
  );
}
