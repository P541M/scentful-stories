import React from "react";
import { Link } from "react-router-dom";

function FragrancePicks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-backgroundPrimary to-backgroundSecondary pt-16 py-12 px-6 sm:px-8 lg:px-16">
      {/* Added pt-16 to account for navbar */}
      <h2 className="text-5xl font-serif font-bold text-textAccent text-center mb-16 leading-tight">
        Scent Stories
      </h2>

      <div className="max-w-4xl mx-auto space-y-16">
        <div>
          <h3 className="text-3xl font-serif font-semibold text-textPrimary mb-4">
            Rachel Ruston
          </h3>
          <p className="text-textPrimary mb-6 leading-relaxed text-lg">
            A natural leader with a powerful yet nurturing presence, exuding
            warmth and sophistication. Rachel’s essence is a blend of cherry’s
            elegance and strawberry’s refreshing sweetness—approachable,
            refined, and full of compassion.
          </p>
          <Link
            to="/fragrance-picks/rachel-ruston"
            className="text-highlight font-medium text-lg hover:text-highlight/70 transition duration-200"
          >
            View Full Story
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FragrancePicks;
