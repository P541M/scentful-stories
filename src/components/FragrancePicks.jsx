import React from "react";
import { Link } from "react-router-dom";

function FragrancePicks() {
  return (
    <div className="min-h-screen bg-black px-4 pb-12 pt-20 text-white sm:px-6 md:px-10 lg:px-16">
      <h2 className="fade-up mb-8 text-center font-serif text-4xl font-bold sm:mb-10 sm:text-5xl">
        Scent Stories
      </h2>

      <div className="mx-auto max-w-2xl space-y-10 sm:space-y-12 md:max-w-3xl lg:max-w-4xl">
        <div className="fade-up-two">
          <h3 className="mb-5 border-b border-offWhite/40 pb-1 font-serif text-2xl font-semibold sm:pb-2 sm:text-3xl">
            Rachel Ruston
          </h3>
          <p className="mb-6 text-base sm:text-lg">
            Rachel radiates grace and authority, embodying both{" "}
            <span className="italic">strength</span> and{" "}
            <span className="italic">warmth</span>. Her scent profile captures
            her elegance, from daytime notes of calm to evening fragrances that
            enhance her charisma. Rachel’s story is one of sophistication and
            empathy, reflected through scents as inviting as she is.
          </p>
          <Link
            to="/stories/rachel-ruston"
            className="text-base font-medium underline transition duration-200 hover:text-offWhite sm:text-lg"
          >
            View Full Story
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FragrancePicks;
