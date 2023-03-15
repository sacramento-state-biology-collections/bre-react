import { createBoard } from '@wixc3/react-board';
import { Bre_Search_Card_Part } from '../../../components/bre-search-card-part/bre-search-card-part';

export default createBoard({
    name: 'Bre_Search_Card_Part',
    Board: () => (
        <Bre_Search_Card_Part toggle_SearchCardPart={() => {}} toggle_SearchPagePart={() => {}} />
    ),
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
