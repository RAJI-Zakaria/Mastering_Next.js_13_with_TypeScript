import Link from 'next/link';
import React, { ReactNode } from 'react'
import SideNavBar from '../components/common/SideNavBar';
import NavBar from '../components/common/NavBar';

interface Props {
    children: ReactNode;
}

const AdminLayout = ({children}: Props) => {
  return (
    <div> 
            {children} 
    </div>
  )
}

export default AdminLayout