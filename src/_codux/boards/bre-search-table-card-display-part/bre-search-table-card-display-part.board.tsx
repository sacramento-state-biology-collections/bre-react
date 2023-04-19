import { createBoard } from '@wixc3/react-board';
import { Bre_Search_Table_CardDisplay_Part } from '../../../components/bre-search-table-card-display-part/bre-search-table-card-display-part';

export default createBoard({
    name: 'Bre_Search_Table_CardDisplay_Part',
    Board: () => (
        <Bre_Search_Table_CardDisplay_Part card_Clicked={() => {}} object_CollectionData={{}} />
    ),
    environmentProps: {
        canvasHeight: 448,
    },
});
