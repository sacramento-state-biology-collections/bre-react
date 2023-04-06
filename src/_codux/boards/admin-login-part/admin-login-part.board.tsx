import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Admin_Login_Part } from '../../../components/admin-login-part/admin-login-part';

export default createBoard({
    name: 'Admin_Login_Part',
    Board: () => (
        <Admin_Login_Part update_LoginData={({}) => Promise.resolve()} attempt_Login={() => {}} />
    ),
});
