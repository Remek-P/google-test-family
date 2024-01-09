import AsideItem from "@/components/aside-section/aside-item/aside-item";

import { FAKE_SIDE_SUGGESTIONS } from "@/content/fake-side-suggestions/fake-sidesuggestions";

import { useEffect, useState } from "react";

function AsideSection() {

  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    setSuggestions(FAKE_SIDE_SUGGESTIONS);
  }, []);


  return (
      <div>
        {suggestions.map((suggestion) => <AsideItem key={suggestion.id} suggestion={suggestion} />)}
      </div>
  );
}

export default AsideSection;