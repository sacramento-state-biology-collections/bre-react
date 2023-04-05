import { createBoard } from '@wixc3/react-board';
import { Bre_Search_Card_Part } from '../../../components/bre-search-card-part/bre-search-card-part';

export default createBoard({
    name: 'Bre_Search_Card_Part',
    Board: () => (
        <Bre_Search_Card_Part
            toggle_SearchCardPart={() => {}}
            toggle_SearchPagePart={() => {}}
            page_Clicked={() => {}}
            object_CardData={[]}
        />
    ),
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
