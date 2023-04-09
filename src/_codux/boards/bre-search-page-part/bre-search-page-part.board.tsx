import { createBoard } from '@wixc3/react-board';
import { Bre_Search_Page_Part } from '../../../components/bre-search-page-part/bre-search-page-part';

export default createBoard({
    name: 'Bre_Search_Page_Part',
    Board: () => <Bre_Search_Page_Part toggle_SearchPagePart={() => {}} object_SpecimenData={[]} />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
