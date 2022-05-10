import React from "react";

function SortPanel({ setSortingMethod }) {
	function handleSort(e) {
		setSortingMethod(e.target.value);
	}

	return (
		<article className='sortpanel'>
			<p className='sortpanel__header'>Сортировка</p>
			<ul>
				<li>
					<button
						type='button'
						className='sortpanel__button-sort-city'
						value='city'
						onClick={handleSort}
					>
						по городу
					</button>
				</li>
				<li>
					<button
						type='button'
						className='sortpanel__button-sort-company'
						value='company'
						onClick={handleSort}
					>
						по компании
					</button>
				</li>
			</ul>
		</article>
	);
}

export default SortPanel;
