import { createBoard } from '@wixc3/react-board';
import { AdminPageBody } from '../../../components/admin-page-body/admin-page-body';

export default createBoard({
    name: 'AdminPageBody',
    Board: () => (
        <AdminPageBody>
            <div className="admin_body">
                <div className="table_admin_component">
                    <div>
                        <h1>Mammals</h1>
                    </div>
                    <div className="table_tab_buttons">
                        <button className="table_button">Edit</button>
                        <button className="table_button">Upload</button>
                        <button className="table_button">Download</button>
                    </div>
                </div>
                <div className="table_admin_component">
                    <div>
                        <h1>Insects</h1>
                    </div>
                    <div className="table_tab_buttons">
                        <button className="table_button">Edit</button>
                        <button className="table_button">Upload</button>
                        <button className="table_button">Download</button>
                    </div>
                </div>
                <div className="table_admin_component">
                    <div>
                        <h1>Fish</h1>
                    </div>
                    <div className="table_tab_buttons">
                        <button className="table_button">Edit</button>
                        <button className="table_button">Upload</button>
                        <button className="table_button">Download</button>
                    </div>
                </div>
                <div className="table_admin_component">
                    <div>
                        <h1>Arboretum</h1>
                    </div>
                    <div className="table_tab_buttons">
                        <button className="table_button">Edit</button>
                        <button className="table_button">Upload</button>
                        <button className="table_button">Download</button>
                    </div>
                </div>
                <div className="table_admin_component">
                    <div>
                        <h1>Vivarium</h1>
                    </div>
                    <div className="table_tab_buttons">
                        <button className="table_button">Edit</button>
                        <button className="table_button">Upload</button>
                        <button className="table_button">Download</button>
                    </div>
                </div>
                <div className="table_admin_component">
                    <div>
                        <h1>Green House</h1>
                    </div>
                    <div className="table_tab_buttons">
                        <button className="table_button">Edit</button>
                        <button className="table_button">Upload</button>
                        <button className="table_button">Download</button>
                    </div>
                </div>
                <div className="table_admin_component">
                    <div>
                        <h1>Herbarium</h1>
                    </div>
                    <div className="table_tab_buttons">
                        <button className="table_button">Edit</button>
                        <button className="table_button">Upload</button>
                        <button className="table_button">Download</button>
                    </div>
                </div>
                <div className="table_admin_component">
                    <div>
                        <h1>Herps</h1>
                    </div>
                    <div className="table_tab_buttons">
                        <button className="table_button">Edit</button>
                        <button className="table_button">Upload</button>
                        <button className="table_button">Download</button>
                    </div>
                </div>
            </div>
        </AdminPageBody>
    ),
    environmentProps: {
        canvasWidth: 1027,
        canvasHeight: 478,
        windowHeight: 676,
    },
});
