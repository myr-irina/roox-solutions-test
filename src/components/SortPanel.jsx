import React, { useState, useEffect } from "react";

function SortPanel({ handleSortByCompany, setSortingMethod, sortingMethod }) {
	
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
						// onClick={() => handleSort('address.city')}
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
						// onClick={() => handleSort('company.name')}
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
