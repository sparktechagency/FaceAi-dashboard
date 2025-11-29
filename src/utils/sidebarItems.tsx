import { BsPatchQuestion } from 'react-icons/bs';
import { TSidebarItem } from './generateSidebarItems';
import { LuClipboardList } from 'react-icons/lu';

const sidebarItems: TSidebarItem[] = [
    {
        key: 'client-list',
        label: 'Analytics',
        path: '',
        icon: '/icons/analtycs.png',
    },
    {
        key: 'users',
        label: 'Users',
        path: 'users',
        icon: '/icons/users.png',
    },
    {
        key: 'settings',
        label: 'Settings',
        path: 'settings',
        icon: '/icons/setting.png',
        children: [
            {
                key: 'terms-and-condition',
                label: 'Terms and Condition',
                path: 'terms-and-condition',
                icon: <LuClipboardList size={20} />,
            },
            {
                key: 'privacy-policy',
                label: 'Privacy Policy',
                path: 'privacy-policy',
                icon: <LuClipboardList size={20} />,
            },
            {
                key: 'faq',
                label: 'FAQ',
                path: 'faq',
                icon: <BsPatchQuestion size={20} />,
            },
        ],
    },
];

export default sidebarItems;
