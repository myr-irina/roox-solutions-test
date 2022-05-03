import React from "react";

function SortPanel() {
	return (
		<article className='sortpanel'>
			<p className='sortpanel__header'>Сортировка</p>
			<button className="sortpanel__button-sort-city">по городу</button>
			<button className="sortpanel__button-sort-company">по компании</button>
		</article>
	);
}

export default SortPanel;
