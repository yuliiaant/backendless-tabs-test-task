import { Link, useLocation } from 'react-router-dom';
import './TabsPage.scss';
import classNames from 'classnames';
import { sortedTabs } from './utils/functions';

export const TabsPage = () => {
  const location = useLocation();

  return (
    <div className='table'>
      <ul className='table__list'>
        {sortedTabs.map(({ id, title, path }) => (
          <li
            key={id}
            className={classNames('table__item', {
              'table__item--active': location.pathname.slice(1) === path
            })}
          >
            <Link className='table__link' to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};