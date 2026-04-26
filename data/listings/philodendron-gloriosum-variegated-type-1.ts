import { philodendronGloriosumVariegated } from "../plants/philodendron-gloriosum-variegated-type-1";
import { createListingFromPlantFile } from "./helpers";

export const philodendronGloriosumVariegatedType1 = createListingFromPlantFile(
  philodendronGloriosumVariegated,
  {
    marketNote:
      "Type 1 still trades like a lineage plant rather than a mass-market release. Type 2 splash has softened with tissue culture, but true Type 1 block variegation remains constrained by slow cutting propagation and seller trust.",
    faq: {
      categories: [
        {
          category: "Price & Value",
          items: [
            {
              question: "How much does a variegated Philodendron gloriosum cost?",
              answer:
                "Current market pricing spans roughly $300 to $2,500 depending on form, size, and variegation quality. Type 2 splash usually sits around the lower end, while true Type 1 block plants and mature cuts command the upper end.",
            },
            {
              question: "What is a fair price for Type 1 variegated gloriosum?",
              answer:
                "For authenticated Type 1 stock, a fair entry price usually starts well above splash-form pricing because it is still cutting-propagated rather than tissue cultured. Small rooted pieces can be reasonable in the mid-hundreds; exceptional, well-established plants still command four figures.",
            },
            {
              question: "Why is Type 1 gloriosum still expensive?",
              answer:
                "Because true Type 1 has not entered tissue culture. Supply is limited to divisions and cuttings from a small lineage, so growth speed, seller credibility, and variegation quality all keep prices elevated compared with TC-backed collector plants.",
            },
          ],
        },
        {
          category: "Buying Guidance",
          items: [
            {
              question: "Where can I buy variegated Philodendron gloriosum?",
              answer:
                "Type 2 splash is broadly available from tissue-culture-heavy sellers, while Type 1 is far more limited and usually appears through specialist sellers such as NSE Tropicals or trusted private collectors. Provenance matters much more for Type 1 than for splash-form plants.",
            },
            {
              question: "Should I buy tissue culture or a rooted cutting for variegated gloriosum?",
              answer:
                "For Type 2 splash, tissue culture is usually the value buy because supply is broad and prices are lower. For Type 1, you are effectively buying rooted cuttings or divisions because there is no true TC pipeline yet.",
            },
          ],
        },
      ],
    },
  },
);
