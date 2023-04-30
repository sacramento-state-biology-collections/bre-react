import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Admin_Edit_Page_Part } from '../../../components/admin-edit-page-part/admin-edit-page-part';

export default createBoard({
    name: 'Admin_Edit_Page_Part',
    Board: () => (
        <Admin_Edit_Page_Part toggle_AdminEditPage={({}) => {}} object_AdminEditPageData />
    ),
});
