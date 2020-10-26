import React, { useRef, useEffect } from 'react';

type Props = {
  header?: string,
  children: React.Node,
  containerCss: string
};

const Page = ({ header, children, containerCss }: Props) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef}>
      <div className={containerCss}>
        { header && <h1 className="text-3xl">{header}</h1>}
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;