// @flow strict
import React from 'react';
import { Link } from 'gatsby';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Menu = ({ menu }: Props) => (
  <nav className="my-6">
    <ul className="list-none">
      {menu.map((item) => (
        <li className="py-1" key={item.path}>
          <Link
            to={item.path}
            className="hover:text-green-500"
            activeClassName="text-green-500"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
