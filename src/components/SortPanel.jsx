import React from "react";

function SortPanel({ handleSortByCompany, handleSortByCity }) {
	return (
		<article className='sortpanel'>
			<p className='sortpanel__header'>Сортировка</p>
			<ul>
				<li>
					<button
						type='button'
						className='sortpanel__button-sort-city'
						// onClick={() => handleSort('address.city')}
						onClick={handleSortByCity}
					>
						по городу
					</button>
				</li>
				<li>
					<button
						type='button'
						className='sortpanel__button-sort-company'
						// onClick={() => handleSort('company.name')}
						onClick={handleSortByCompany}
					>
						по компании
					</button>
				</li>
			</ul>
		</article>
	);
}

export default SortPanel;
