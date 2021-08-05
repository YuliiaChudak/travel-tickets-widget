import React, { ReactElement } from 'react';

type Props = {
  children: ReactElement;
};

const Page = ({ children }: Props) => <>{children}</>;

export default Page;
