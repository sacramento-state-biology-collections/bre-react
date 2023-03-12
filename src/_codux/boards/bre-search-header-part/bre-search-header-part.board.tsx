import { createBoard } from '@wixc3/react-board';
import { Bre_Search_Header_Part } from '../../../components/bre-search-header-part/bre-search-header-part';

export default createBoard({
    name: 'Bre_Search_Header_Part',
    Board: () => (
        <Bre_Search_Header_Part 
            toggle_WelcomeView={()=>{}} 
            toggle_BreSearchBodyPart={()=>{}}
            bool_BreSearchBodyPart={false}
            clicked={()=>{}}
            update_CollectionName={()=>{}}
            update_SearchCriteria={()=>{}}
        />
    )
});
