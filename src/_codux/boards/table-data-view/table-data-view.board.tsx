import { createBoard } from '@wixc3/react-board';
import { TableDataView } from '../../../components/table-data-view/table-data-view';
import TableDataView_module from '../../../components/table-data-view/table-data-view.module.scss';

export default createBoard({
    name: 'TableDataView',
    Board: () => (
        <TableDataView className={TableDataView_module.root}>
            <table className={TableDataView_module.TableMainClass}>
                <li className={TableDataView_module.PlaceholderItems}>Common Name</li>
                <li className={TableDataView_module.PlaceholderItems}>Scientific Name</li>
                <li className={TableDataView_module.PlaceholderItems}>Prep Type</li>
                <li className={TableDataView_module.PlaceholderItems}>Drawer #</li>
                <li className={TableDataView_module.PlaceholderItems}> </li>
            </table>
            <tr className={TableDataView_module.TableRow}>
                <li className={TableDataView_module.TableRowItem}>Item</li>
                <li className={TableDataView_module.TableRowItem}>Item</li>
                <li className={TableDataView_module.TableRowItem}>Item</li>
                <li className={TableDataView_module.TableRowItem}>Item</li>
                <li className={TableDataView_module.TableRowItem}>
                    <button className={TableDataView_module.PreviewButtonStyles}>Preview</button>
                </li>
            </tr>
            <tr className={TableDataView_module.TableRow}>
                <li className={TableDataView_module.TableRowItem}>Item</li>
                <li className={TableDataView_module.TableRowItem}>Item</li>
                <li className={TableDataView_module.TableRowItem}>Item</li>
                <li className={TableDataView_module.TableRowItem}>Item</li>
                <li className={TableDataView_module.TableRowItem}>
                    <button className={TableDataView_module.PreviewButtonStyles}>Preview</button>
                </li>
            </tr>
            <tr className={TableDataView_module.TableRow}>
                <li className={TableDataView_module.TableRowItem}>Item</li>
                <li className={TableDataView_module.TableRowItem}>Item</li>
                <li className={TableDataView_module.TableRowItem}>Item</li>
                <li className={TableDataView_module.TableRowItem}>Item</li>
                <li className={TableDataView_module.TableRowItem}>
                    <button className={TableDataView_module.PreviewButtonStyles}>Preview</button>
                </li>
            </tr>
            <tr className={TableDataView_module.TableRow}>
                <li className={TableDataView_module.TableRowItem}>Item</li>
                <li className={TableDataView_module.TableRowItem}>Item</li>
                <li className={TableDataView_module.TableRowItem}>Item</li>
                <li className={TableDataView_module.TableRowItem}>Item</li>
                <li className={TableDataView_module.TableRowItem}>
                    <button className={TableDataView_module.PreviewButtonStyles}>Preview</button>
                </li>
            </tr>
        </TableDataView>
    ),
    environmentProps: {
        canvasHeight: 870,
        canvasWidth: 1000,
        windowWidth: 1024,
    },
});
