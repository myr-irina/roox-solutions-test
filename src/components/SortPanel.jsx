import React from "react";

function SortPanel() {
	return (
		<article className='sortpanel'>
			<p className='sortpanel__header'>Сортировка</p>
			<ul>
				<li>
					<button type='button' className='sortpanel__button-sort-city'>
						по городу
					</button>
				</li>
				<li>
					<button type='button' className='sortpanel__button-sort-company'>
						по компании
					</button>
				</li>
			</ul>
		</article>
	);
}

export default SortPanel;
