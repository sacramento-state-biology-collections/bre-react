import { createBoard } from '@wixc3/react-board';
import { Bre_Search_Header_Part } from '../../../components/bre-search-header-part/bre-search-header-part';

export default createBoard({
    name: 'Bre_Search_Header_Part',
    Board: () => (
        <Bre_Search_Header_Part
            toggle_WelcomeView={() => {}}
            toggle_BreSearchBodyPart={() => {}}
            toggle_SearchTablePart={() => {}}
            toggle_SearchTableCardPart={() => {}}
            bool_BreSearchBodyPart={false}
            table_Clicked={() => {}}
            update_CollectionName={() => {}}
            update_SearchCriteria={() => {}}
        />
    ),
    environmentProps: {
        canvasWidth: 2114,
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
