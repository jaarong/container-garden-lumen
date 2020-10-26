// @flow strict
import React from 'react';
import Publisher from './Publisher';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import { useSiteMetadata } from '../../hooks';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { title, subtitle, contacts, copyright, menu } = useSiteMetadata();

  return (
    <div className="col-span-4 border-r-4 border-gray-200 px-16 pt-10">
      <div>
        <Publisher title={title} subtitle={subtitle} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
